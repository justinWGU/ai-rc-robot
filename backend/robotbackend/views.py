import json
from django.http import HttpResponse
from django.http import StreamingHttpResponse
from django.http import HttpRequest
from django.views.decorators.csrf import csrf_exempt
import cv2 as cv

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

def rotate_camera():
  # TODO: implement function
  pass

def test_view(request: HttpRequest):
  # continuous response that returns images as they are available
  return StreamingHttpResponse(streaming_content=capture_image(), content_type='multipart/x-mixed-replace; boundary=frame')

@csrf_exempt
def rotate_camera_view(request: HttpRequest):
  # TODO call util function to perform camera rotation here
  # bytes = request.body.decode("utf-8")
  request_dict = json.loads(request.body)
  command = request_dict.get('command')
  # pass comma to next function
  rotate_camera()
  return HttpResponse(content=f'Successly received request: ${command}', status=200)
