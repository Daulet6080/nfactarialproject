from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, BookingViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'bookings', BookingViewSet)


urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
