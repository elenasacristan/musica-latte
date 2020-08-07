from .models import Foto
from rest_framework import viewsets
from gallery.serializers import FotoSerializer


class FotoViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows items to be viewed or edited.
    """
    queryset = Foto.objects.all()
    serializer_class = FotoSerializer
