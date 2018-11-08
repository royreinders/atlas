from rest_framework import viewsets, views
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser
from django_filters.rest_framework import DjangoFilterBackend
from .datacontroller import Datacontroller
from .executioncontroller import Executioncontroller

from .serializers import *


# API endpoint for viewing/editing hosts
#class HostViewSet(viewsets.ModelViewSet):
#    queryset = Host.objects.all()
#    serializer_class = HostSerializer
#    filter_backends = (DjangoFilterBackend,)
#    filter_fields = ('id', 'fqdn')


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

    #ToDo: Kan dit cleaner? && Check op invalide data
    @action(detail=True)
    def execute(self, request, pk=None):
        executioncontroller = Executioncontroller()
        tool = self.get_object()

        targets = []
        target = {}
        for item in request.data:
            target['pocid'] = item.get('id')
            target['host'] = item.get('service').get('host')
            target['port'] = item.get('service').get('port')
            print(target)
            targets.append(target)

        #pocs = []
        #if serializer.is_valid():
        #    for item in serializer.validated_data:
        #        service = item.pop('service')
        #        service = Service(**service)
        #        poc = ProofOfConcept(**item)
        #        poc.service = service
        #        pocs.append(poc)
        executioncontroller.execute(tool, targets)

        return Response({"success":True})

class ExecutionView(views.APIView):

    def post(self, request):
        file = request.FILES['file']
        datacontroller = Datacontroller()
        datacontroller.import_nessusfile(file)
        # print(file.read())
        return Response({"success": True})


class ImportNessus(views.APIView):
    parser_classes = (MultiPartParser,)

    def post(self, request):
        # files = request.FILES      # << Use this when handling multiple files...
        file = request.FILES['file']
        datacontroller = Datacontroller()
        datacontroller.import_nessusfile(file)
        # print(file.read())
        return Response({"success": True})
