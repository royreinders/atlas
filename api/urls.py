from django.urls import path, include
from . import views
from rest_framework import routers

# Register URLS with router for viewsets
router = routers.DefaultRouter()
router.register('findings', views.FindingViewSet)
router.register('pocs', views.ProofOfConceptViewSet)
router.register('tools', views.ToolViewSet)
router.register('tasks', views.TaskViewSet)

# Add custom URL patterns for generic views and append DRF router
urlpatterns = [
    path('importnessus/', views.ImportNessus.as_view(), name='importnessus'),
    path('execute/', views.Execute.as_view(), name='execute'),
    path('', include(router.urls))
]
