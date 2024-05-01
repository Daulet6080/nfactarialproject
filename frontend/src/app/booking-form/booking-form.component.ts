import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {
  @Input() event: any; 
  seats: number = 1;   

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  submitBooking(): void {
    const bookingData = {
      event: this.event.id,
      seats: this.seats
    };
    this.apiService.createBooking(bookingData).subscribe(
      response => {
        console.log('Booking successful:', response);
        alert('Booking successful!');
      },
      error => {
        console.error('Error making booking:', error);
        alert('Error making booking: ' + error.message);
      }
    );
  }
}
