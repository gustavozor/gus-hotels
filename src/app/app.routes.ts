import { Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/dashboard/dashboard/dashboard.component')
            .then(m => m.DashboardComponent)
      },
      {
        path: 'rooms',
        loadComponent: () =>
          import('./features/rooms/room-list/room-list.component')
            .then(m => m.RoomListComponent)
      },
      {
        path: 'bookings',
        loadComponent: () =>
          import('./features/bookings/booking-form/booking-form.component')
            .then(m => m.BookingFormComponent)
      },
      {
        path: 'guests',
        loadComponent: () =>
          import('./features/guests/guest-list/guest-list.component')
            .then(m => m.GuestListComponent)
      }
    ]
  }
];