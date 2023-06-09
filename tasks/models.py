from django.db import models


class Task(models.Model):
    
    PRIORITY_CHOICES = (
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High')
    )
    
    title = models.CharField(
        'Title',
        max_length=150
    )
    description = models.TextField(
        'Description',
        max_length=350,
        blank=True,
        null=True
    )
    priority = models.CharField(
        'Priority',
        max_length=6,
        choices=PRIORITY_CHOICES
    )
    complete = models.BooleanField(
        'Complete',
        default=False
    )
    created_at = models.DateField(
        'Created',
        auto_now_add=True
    )
    
    class Meta:
        verbose_name_plural = 'My Tasks'
        # sort tasks in descending order
        ordering = ['-id']
    
    def __str__(self):
        return self.title