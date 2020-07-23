from .models import Video
from rest_framework import viewsets, permissions
from serializers import VideoSerializer

class VideoViewSet(viewsets.ModelViewSet):
    queryset = VideoSerializer.objects.all()
    permissions_classes = [
        permissions.AllowAny 
    ]
    serializer_class = VideoSerializer