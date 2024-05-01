export interface Event {
  id: number;
  title: string;
  location: string;
  date_time: string; // или тип Date, в зависимости от формата данных в Django модели
  available_seats: number;
  description?: string;
  organizer_info?: string;
  event_image?: string; // или тип File, в зависимости от того, как вы храните изображения
}
