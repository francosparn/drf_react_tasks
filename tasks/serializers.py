from rest_framework import serializers, pagination

# models
from .models import Task


# Task
class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        # serializers fields
        fields = (
            'id',
            'title',
            'description',
            'priority',
            'complete',
            'created_at'
        )

# Pagination
class PaginationSerializer(pagination.PageNumberPagination):
    page_size = 4
    max_page_size = 50