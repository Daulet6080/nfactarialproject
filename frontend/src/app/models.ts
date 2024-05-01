export interface Event {
  id: number;
  title: string;
  location: string;
  date_time: Date;
  available_seats: number;
  description: string;
  organizer_info: string;
  event_image: string; // Строка, содержащая URL изображения
}

export interface Booking {
  id: number;
  user: number; // ID пользователя
  event: number; // ID события
  seats: number;
}
