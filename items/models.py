from django.db import models

# Create your models here.
class Item(models.Model):
    icon = models.CharField(max_length=50)
    name = models.CharField(max_length=50)
    text = models.TextField()
    category = models.CharField(max_length=50)

    def __str__(self):
        return "{} - {}...".format(self.name, self.text[:50])
