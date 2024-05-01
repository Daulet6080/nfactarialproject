import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventsListComponent } from './events-list/events-list.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full' }, // Перенаправление на список мероприятий
  { path: 'events', component: EventsListComponent }, // Маршрут для списка мероприятий
  { path: 'events/:id', component: EventDetailsComponent }, // Маршрут для деталей мероприятия
  { path: 'login', component: LoginComponent }, // Маршрут для страницы входа
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
