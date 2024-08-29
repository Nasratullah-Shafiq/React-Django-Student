from django.db import models

# Create your models here.
class Student(models.Model):
    name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255, default='Shafiq')
    father_name = models.CharField(max_length=255, default='Sardar')
    course = models.CharField(max_length=255, default='Mathematics')
    fee = models.IntegerField()
    address = models.CharField(max_length=255)