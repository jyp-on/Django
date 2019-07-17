from django.utils import timezone
from django.db import models


#model
class Post(models.Model):
    author = models.ForeignKey('auth.User', on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    text = models.TextField()
    created_date = models.DateTimeField(
            default=timezone.now)
    published_date = models.DateTimeField(
            blank=True, null=True)

    def publish(self):
        self.published_date = timezone.now()
        self.save()

    def __str__(self):
        return self.title

# from django.db import models
#
# # Create your models here.
# class Author(models.Model):
#     """Model representing an author."""
#     first_name = models.CharField(max_length=100)
#     last_name = models.CharField(max_length=100)
#     date_of_birth = models.DateField(null=True, blank=True)
#     date_of_death = models.DateField('Died', null=True, blank=True)
#
#     class Meta:
#         ordering = ['last_name', 'first_name']
#
#     def get_absolute_url(self):
#         """Returns the url to access a particular author instance."""
#         return reverse('author-detail', args=[str(self.id)])
#
#     def __str__(self):
#         """String for representing the Model object."""
#         return f'{self.last_name}, {self.first_name}'
#         from django.db import models

# <!-- 연습용으로 복사함 -->
