from django.http import HttpResponse
from django.http import StreamingHttpResponse
from django.http import HttpRequest
from django.http.response import HttpResponseServerError
import cv2 as cv
import numpy as np

def capture_image():
  print("Capturing image...")
  cap = cv.VideoCapture(0)
  if not cap.isOpened():
    print("Camera not opened")
    return
  
  while True:
    ret, frame = cap.read()
    if not ret:
      print("Did not receive next frame. Exiting...")
      break
    succ, buffer = cv.imencode('.jpg', frame)
    if not succ:
      print("Could not compress image.")
      continue
    compressed_frame = buffer.tobytes()
    yield (
      b'--frame\r\n'
      b'Content-Type: image/jpeg\r\n\r\n' + compressed_frame + b'\r\n'
    )
  cap.release()
  cv.destroyAllWindows()
  

def test_view(request: HttpRequest):
  # continuous response that returns images as they are available
  return StreamingHttpResponse(streaming_content=capture_image(), content_type='multipart/x-mixed-replace; boundary=frame')
