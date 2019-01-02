from rest_framework import viewsets, views
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django_filters.rest_framework import DjangoFilterBackend
from .datacontroller import Datacontroller
from .executioncontroller import Executioncontroller

from .serializers import *


# API endpoint for viewing/editing hosts
# class HostViewSet(viewsets.ModelViewSet):
#    queryset = Host.objects.all()
#    serializer_class = HostSerializer
#    filter_backends = (DjangoFilterBackend,)
#    filter_fields = ('id', 'fqdn')

# Business logic goes here


class FindingViewSet(viewsets.ModelViewSet):
    queryset = Finding.objects.all()
    serializer_class = FindingListSerializer


class ProofOfConceptViewSet(viewsets.ModelViewSet):
    serializer_class = ProofOfConceptSerializer
    queryset = ProofOfConcept.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('finding', 'haspoc', 'service')


class ToolViewSet(viewsets.ModelViewSet):
    serializer_class = ToolSerializer
    queryset = Tool.objects.all()
    filter_fields = ('id', 'name')


class ImportNessus(views.APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # files = request.FILES      # << Use this when handling multiple files...
        file = request.FILES['file']
        datacontroller = Datacontroller()
        datacontroller.import_nessusfile(file)
        # print(file.read())
        return Response({"success": True})

class Execute(views.APIView):

    def post(self, request):
        commandstring = request.data["commandstring"]
        output = Executioncontroller.execute_test(commandstring) #ToDo: Sanitize input
        return Response({"output": output})


class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('tool', 'running')

    @action(detail=True)
    def start(self, request, pk=None):
        executioncontroller = Executioncontroller()
        task = self.get_object()
        executioncontroller.execute(task)
        return Response({"success": True})
