from .views import test_view, rotate_camera
from django.urls import path

urlpatterns = [
  path('test/', test_view),
  path('rotate-camera/', rotate_camera),
]