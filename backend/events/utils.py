from datetime import timedelta
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

def create_google_calendar_event(user, event):
    """
    Create a Google Calendar event for the given event and user.

    Parameters:
    - user: The user who is creating the event.
    - event: The Event instance to add to the Google Calendar.

    Returns:
    - The ID of the created calendar event.
    """
    credentials = Credentials(token=user.oauth_token)
    service = build('calendar', 'v3', credentials=credentials)

    event_data = {
        'summary': event.title,
        'location': event.location,
        'description': event.description,
        'start': {'dateTime': event.date_time.isoformat()},
        'end': {'dateTime': (event.date_time + timedelta(hours=2)).isoformat()},
    }

    created_event = service.events().insert(calendarId='primary', body=event_data).execute()
    return created_event.get('id')
