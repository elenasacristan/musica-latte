from .models import Foto
from rest_framework import viewsets, permissions
from serializers import FotoSerializer

class FotoViewSet(viewsets.ModelViewSet):
    queryset = FotoSerializer.objects.all()
    permissions_classes = [
        permissions.AllowAny 
    ]
    serializer_class = FotoSerializer