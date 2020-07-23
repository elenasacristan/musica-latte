from django.db import models

# Create your models here.
class Video(models.Model):
    title = models.CharField(max_length=50)
    videoId = models.CharField(max_length=50)
    category = models.CharField(max_length=50)

    def __str__(self):
        return "{} - {}...".format(self.title, self.category)
