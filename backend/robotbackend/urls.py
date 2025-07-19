from .views import rotate_camera_view, test_view, blink_led_view
from django.urls import path

urlpatterns = [
  path('test/', test_view),
  path('rotate-camera/', rotate_camera_view),
  path('blink-led/', blink_led_view)
]