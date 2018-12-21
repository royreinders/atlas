from .models import *
from rest_framework import serializers


# ---------------------- Not In Use ------------------------------

# Host serializer, serializing Host fields, with only using the brief Service serializer
class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = ('id', 'ip', 'fqdn', 'mac', 'os')


# --------------------- In Use -----------------------------------

class ServiceHostSerializer(serializers.ModelSerializer):
    host = serializers.SlugRelatedField(many=False, slug_field='ip', read_only=True)

    class Meta:
        model = Service
        fields = ('id', 'name', 'port', 'protocol', 'host')


# Finding serializer, serializing only id and name
class FindingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Finding
        fields = ('id', 'name')


class ProofOfConceptSerializer(serializers.ModelSerializer):
    service = ServiceHostSerializer(many=False, read_only=True)
    finding = serializers.PrimaryKeyRelatedField(many=False, read_only=True)

    class Meta:
        model = ProofOfConcept
        fields = ('id', 'finding', 'service', 'haspoc', 'falsepositive', 'poc')

class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = '__all__'