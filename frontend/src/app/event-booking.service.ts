// src/app/event-booking.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Event } from './event.model';
import { Booking } from './booking.model'; // Убедитесь, что у вас есть модель Booking

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {
  private eventsUrl = 'http://localhost:8000/api/events';
  private bookingsUrl = 'http://localhost:8000/api/bookings';

  constructor(private http: HttpClient) { }

  // Event methods
  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl).pipe(
      catchError(this.handleError<Event[]>('getEvents', []))
    );
  }

  getEventById(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.eventsUrl}/${id}`).pipe(
      catchError(this.handleError<Event>(`getEventById id=${id}`))
    );
  }

  addEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(this.eventsUrl, event).pipe(
      catchError(this.handleError<Event>('addEvent'))
    );
  }

  updateEvent(event: Event): Observable<any> {
    return this.http.put(`${this.eventsUrl}/${event.id}`, event).pipe(
      catchError(this.handleError<any>('updateEvent'))
    );
  }

  deleteEvent(id: number): Observable<Event> {
    return this.http.delete<Event>(`${this.eventsUrl}/${id}`).pipe(
      catchError(this.handleError<Event>('deleteEvent'))
    );
  }

  // Booking methods
  getBookings(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.bookingsUrl).pipe(
      catchError(this.handleError<Booking[]>('getBookings', []))
    );
  }

  getBookingById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.bookingsUrl}/${id}`).pipe(
      catchError(this.handleError<Booking>(`getBookingById id=${id}`))
    );
  }

  addBooking(booking: Booking): Observable<Booking> {
    return this.http.post<Booking>(this.bookingsUrl, booking).pipe(
      catchError(this.handleError<Booking>('addBooking'))
    );
  }

  updateBooking(booking: Booking): Observable<any> {
    return this.http.put(`${this.bookingsUrl}/${booking.id}`, booking).pipe(
      catchError(this.handleError<any>('updateBooking'))
    );
  }

  deleteBooking(id: number): Observable<Booking> {
    return this.http.delete<Booking>(`${this.bookingsUrl}/${id}`).pipe(
      catchError(this.handleError<Booking>('deleteBooking'))
    );
  }

  // Error handling
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}

