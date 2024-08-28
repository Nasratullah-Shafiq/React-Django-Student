from rest_framework import serializers
from .models import Student

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'  # Include all fields from the Student model
        # Alternatively, specify specific fields:
        # fields = ['id', 'name', 'age', ...]  # Replace with actual field names
