from django.db import models

def upload_path(instance, filename):
    return '/'.join(['images', filename])
# Create your models here.
class Foto(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    category = models.CharField(max_length=50)
    foto = models.ImageField(upload_to=upload_path)

    def __str__(self):
        return "{} - {}...".format(self.title, self.category)
