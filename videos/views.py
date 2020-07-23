from .models import Video
from rest_framework import viewsets
from videos.serializers import VideoSerializer


class VideoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = Video.objects.all()
    serializer_class = VideoSerializer
