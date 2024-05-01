export class Booking {
    id: number;
    userId: number; 
    eventId: number; 
    seats: number;   
  
    constructor(id: number, userId: number, eventId: number, seats: number) {
      this.id = id;
      this.userId = userId;
      this.eventId = eventId;
      this.seats = seats;
    }
  }