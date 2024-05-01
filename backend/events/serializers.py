from rest_framework import serializers
from .models import Event, Booking

class EventSerializer(serializers.ModelSerializer):
    event_image = serializers.ImageField(use_url=True)

    def get_event_image(self, obj):
        if obj.event_image:
            return self.context['request'].build_absolute_uri(obj.event_image.url)
        return None

    class Meta:
        model = Event
        fields = '__all__'

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'user', 'event', 'seats']

    def validate(self, data):
        """
        Ensure there are enough seats available for the booking.
        """
        if data['seats'] > data['event'].available_seats:
            raise serializers.ValidationError("There are not enough seats available.")
        return data

    def create(self, validated_data):
        """
        Create a new booking and update the available seats for the event.
        """
        booking = Booking.objects.create(**validated_data)
        event = booking.event
        event.available_seats -= booking.seats
        event.save()
        return booking
