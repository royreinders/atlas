from django.contrib import admin
from . models import *

admin.site.register(Host)
admin.site.register(Service)
admin.site.register(Finding)
admin.site.register(ProofOfConcept)
admin.site.register(Tool)
admin.site.register(Task)
admin.site.register(Import)