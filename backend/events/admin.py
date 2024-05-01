from django.contrib import admin
from .models import Event, Booking

class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'location', 'date_time', 'available_seats')
    list_filter = ('date_time', 'location')
    search_fields = ('title', 'description', 'organizer_info')
    date_hierarchy = 'date_time'

class BookingAdmin(admin.ModelAdmin):
    list_display = ('user', 'event', 'seats', 'booking_status')
    list_filter = ('event', 'user')
    search_fields = ('user__username', 'event__title')
    raw_id_fields = ('user', 'event')

    def booking_status(self, obj):
        return "Confirmed" if obj.seats <= obj.event.available_seats else "Overbooked"
    booking_status.short_description = 'Booking Status'

admin.site.register(Event, EventAdmin)
admin.site.register(Booking, BookingAdmin)
