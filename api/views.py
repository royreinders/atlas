from rest_framework import viewsets, views
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django_filters.rest_framework import DjangoFilterBackend
from .datacontroller import Datacontroller
from .executioncontroller import Executioncontroller
from datetime import datetime


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
    filter_fields = ('service', 'finding', 'imported')

class ProofOfConceptServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ProofOfConceptServiceSerializer
    queryset = ProofOfConcept.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('finding', 'haspoc')

class ServiceHostViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceHostFindingSerializer
    queryset = Service.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'name', 'port', 'protocol', 'host', 'findings')

class ServiceViewSet(viewsets.ModelViewSet):
    serializer_class = ServiceSerializer
    queryset = Service.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'name', 'port', 'protocol', 'host', 'findings')

class HostViewSet(viewsets.ModelViewSet):
    serializer_class = HostSerializer
    queryset = Host.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('id', 'ip', 'fqdn')


class ToolViewSet(viewsets.ModelViewSet):
    serializer_class = ToolSerializer
    queryset = Tool.objects.all()
    filter_fields = ('id', 'name')

class ImportViewSet(viewsets.ModelViewSet):
    serializer_class = ImportSerializer
    queryset = Import.objects.all()

class TaskServiceViewSet(viewsets.ModelViewSet):
    serializer_class = TaskServiceSerializer
    queryset = Task.objects.all()


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
        output = Executioncontroller.execute_test(commandstring)
        return Response({"output": output})


class TaskViewSet(viewsets.ModelViewSet):
    def get_serializer_class(self):
        if self.action == 'create':
            # Serializer for GET method
            return TaskCreateSerializer
        return TaskSerializer  # I dont' know what you want for create/destroy/update.
    queryset = Task.objects.all()
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('tool', 'running')

    @action(detail=True)
    def start(self, request, pk=None):
        executioncontroller = Executioncontroller()
        task = self.get_object()
        executioncontroller.execute(task)
        return Response({"success": True})


class Settings_Save(views.APIView):
    def get(self, request):
        filename = request.query_params.get('filename')
        datacontroller = Datacontroller()
        response = datacontroller.save_project(filename)
        return response


class Settings_Clear(views.APIView):
    def get(self, request):
        datacontroller = Datacontroller()
        datacontroller.clear_project()
        return Response({"success": True})


class Settings_Load(views.APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # files = request.FILES      # << Use this when handling multiple files...
        projectfile = request.FILES['file']
        filename = "upload/projectsave" + str(datetime.timestamp(datetime.now())) + ".xml"
        with open(filename, 'a') as file:
            file.write(str(projectfile.read(), 'utf-8'))

        datacontroller = Datacontroller()
        datacontroller.load_project(filename)
        return Response({"success": True})

    def get(self, request):
        #datacontroller = Datacontroller()
        #datacontroller.load_project("dummy")
        return Response({"success": True})


class Settings_System_Info(views.APIView):

    def get(self, request):
        datacontroller = Datacontroller()
        return Response(datacontroller.get_system_info())