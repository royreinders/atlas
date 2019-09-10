from .models import *
from rest_framework import serializers


class HostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Host
        fields = '__all__'


class ProofOfConceptFindingSerializer(serializers.ModelSerializer):
    finding = serializers.SlugRelatedField(many=False, slug_field='id', read_only=True)

    class Meta:
        model = ProofOfConcept
        fields = ('id', 'finding')

class ServiceHostSerializer(serializers.ModelSerializer):
    host = HostSerializer(many=False, read_only=False)
    #findings = ProofOfConceptFindingSerializer(many=True, read_only=True)
    findings = serializers.SlugRelatedField(many=True, slug_field='id', read_only=True)

    class Meta:
        model = Service
        fields = ('id', 'name', 'port', 'protocol', 'host', 'haspoc', 'falsepositive', 'findings')


# Finding serializer, serializing only id and name
class FindingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Finding
        fields = ('id', 'name', 'checked')


class ProofOfConceptSerializer(serializers.ModelSerializer):
    service = serializers.SlugRelatedField(many=False, slug_field='id', read_only=True)

    class Meta:
        model = ProofOfConcept
        fields = ('id', 'service', 'poc', 'info', 'imported')


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'starttime', 'threads', 'running', 'completed', 'targets_completed', 'tool', 'services', 'errormessage')


class ImportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Import
        fields = '__all__'
