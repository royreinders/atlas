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


# Not Used ...?
class ServiceHostFindingSerializer(serializers.ModelSerializer):
    host = HostSerializer(many=False, read_only=False)
    findings = serializers.SlugRelatedField(many=True, slug_field='id', read_only=True)

    class Meta:
        model = Service
        fields = ('id', 'name', 'port', 'protocol', 'host', 'findings')


class ServiceHostSerializer(serializers.ModelSerializer):
    host = HostSerializer(many=False, read_only=False)

    class Meta:
        model = Service
        fields = ('id', 'name', 'port', 'protocol', 'host')


class ServiceSerializer(serializers.ModelSerializer):
    findings = serializers.SlugRelatedField(many=True, slug_field='id', read_only=True)

    class Meta:
        model = Service
        fields = ('id', 'name', 'port', 'protocol', 'host', 'findings')

# Finding serializer, serializing only id and name
class FindingListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Finding
        fields = ('id', 'name', 'checked')


class ProofOfConceptServiceSerializer(serializers.ModelSerializer):
    service = ServiceHostSerializer(many=False, read_only=True)
    finding = serializers.SlugRelatedField(many=False, slug_field='id', read_only=True)

    class Meta:
        model = ProofOfConcept
        fields = ('id', 'service', 'finding', 'info', 'imported', 'haspoc', 'falsepositive')


class ProofOfConceptSerializer(serializers.ModelSerializer):
    service = serializers.SlugRelatedField(many=False, slug_field='id', read_only=True)
    finding = serializers.SlugRelatedField(many=False, slug_field='id', read_only=True)

    class Meta:
        model = ProofOfConcept
        fields = ('id', 'service', 'finding', 'poc', 'info', 'imported')


class ToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tool
        fields = '__all__'


class TaskSerializer(serializers.ModelSerializer):
    tool = ToolSerializer(many=False, read_only=True)
    finding = FindingListSerializer(many=False, read_only=True)

    class Meta:
        model = Task
        fields = ('id', 'starttime', 'threads', 'running', 'completed', 'targets_completed', 'tool', 'services', 'finding', 'errormessage')


class TaskCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ('id', 'starttime', 'threads', 'running', 'completed', 'targets_completed', 'tool', 'services', 'finding', 'errormessage')

class TaskServiceSerializer(serializers.ModelSerializer):
    services = ServiceHostSerializer(many=True, read_only=True)

    class Meta:
        model = Task
        fields = ('id', 'services')


class ImportSerializer(serializers.ModelSerializer):
    class Meta:
        model = Import
        fields = '__all__'
