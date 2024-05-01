import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private baseUrl = 'http://localhost:8000/api'; 

  constructor(private http: HttpClient) { }

  getEvents(): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/`);
  }

  getEventById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/${id}/`);
  }

  getBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/`);
  }

  createBooking(bookingData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/bookings/`, bookingData);
  }

  updateEvent(id: number, eventData: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/events/${id}/`, eventData);
  }

  getBookingsForEvent(eventId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/bookings/?event=${eventId}`);
  }
}

