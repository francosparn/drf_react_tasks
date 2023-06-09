from rest_framework import viewsets

# serializers
from .serializers import (
    TaskSerializer, 
    PaginationSerializer
)

# models
from .models import Task


class TaskView(viewsets.ModelViewSet):
    # Get all tasks
    queryset = Task.objects.all()
    
    serializer_class = TaskSerializer
    pagination_class = PaginationSerializer
