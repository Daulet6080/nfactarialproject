from django.conf import settings
from django.db import models

class Event(models.Model):
    title = models.CharField(max_length=200)
    location = models.CharField(max_length=200)
    date_time = models.DateTimeField()
    available_seats = models.IntegerField()
    description = models.TextField(blank=True, null=True)
    organizer_info = models.CharField(max_length=300, blank=True, null=True)
    event_image = models.ImageField(upload_to='event_images/', null=True, blank=True)

    def __str__(self):
        return f"{self.title} at {self.location} on {self.date_time}"

class Booking(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='bookings')
    seats = models.IntegerField()

    def __str__(self):
        return f"{self.user.username} booked {self.seats} seats for {self.event.title}"
