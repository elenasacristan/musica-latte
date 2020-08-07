from .models import Foto
from rest_framework import serializers


class FotoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Foto
        fields = '__all__'

