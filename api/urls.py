from django.urls import path, include
from . import views
from rest_framework import routers

# Register URLS with router for viewsets
router = routers.DefaultRouter()
router.register('findings', views.FindingViewSet)
router.register('servicehosts', views.ServiceHostViewSet)
router.register('tools', views.ToolViewSet)
router.register('tasks', views.TaskViewSet)
router.register('pocs', views.ProofOfConceptViewSet)
router.register('imports', views.ImportViewSet)
router.register('hosts', views.HostViewSet)
router.register('pocservices', views.ProofOfConceptServiceViewSet)
router.register('taskservices', views.TaskServiceViewSet)
router.register('services', views.ServiceViewSet)

# Add custom URL patterns for generic views and append DRF router
urlpatterns = [
    path('importnessus/', views.ImportNessus.as_view(), name='importnessus'),
    path('settings/save/', views.Settings_Save.as_view(), name='settings'),
    path('settings/clear/', views.Settings_Clear.as_view(), name='settings_clear'),
    path('settings/load/', views.Settings_Load.as_view(), name='settings'),
    path('execute/', views.Execute.as_view(), name='execute'),
    path('', include(router.urls))
]
