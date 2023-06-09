from django.contrib import admin

# models
from .models import Task

# Model TaskAdmin
class TaskAdmin(admin.ModelAdmin):
    # fields that are displayed in the administration panel
    list_display = (
        'id',
        'title',
        'description',
        'priority',
        'complete',
        'created_at'
    )

admin.site.register(Task, TaskAdmin)
