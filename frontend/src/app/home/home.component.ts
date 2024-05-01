// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { EventService } from '../event.service';
// import { Event } from '../models';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit {
//   events: Event[] = [];

//   constructor(private router: Router, private eventService: EventService) {}

//   ngOnInit(): void {
//     this.loadEvents();
//   }

//   loadEvents(): void {
//     this.eventService.getNewEvents().subscribe(
//       events => this.events = events,
//       error => console.error('Error loading events:', error)
//     );
//   }

//   bookEvent(eventId: number): void {
//     this.router.navigate(['/book', eventId]);
//   }
// }
