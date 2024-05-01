from rest_framework import viewsets, permissions
from .models import Event, Booking
from .serializers import EventSerializer, BookingSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class BookingViewSet(viewsets.ModelViewSet):
    queryset = Booking.objects.all()
    serializer_class = BookingSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        """
        Custom create method to decrement the available seats upon booking creation.
        """
        if serializer.is_valid():
            serializer.save(user=self.request.user)
            event = serializer.instance.event
            event.available_seats -= serializer.validated_data['seats']
            event.save()
            
    
