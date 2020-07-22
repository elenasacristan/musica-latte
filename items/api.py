from .models import Item
from rest_framework import viewsets, permissions
from serializers import ItemSerializer

class ItemViewSet(viewsets.ModelViewSet):
    queryset = ItemSerializer.objects.all()
    permissions_classes = [
        permissions.AllowAny
    ]
    serializer_class = ItemSerializer