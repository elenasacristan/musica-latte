# Generated by Django 3.0.8 on 2020-07-23 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('videos', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='video',
            old_name='videoURL',
            new_name='videoId',
        ),
    ]
