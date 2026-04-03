import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../../core/services/room.service';
import { BookingService } from '../../../core/services/booking.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  private roomService = inject(RoomService);
  private bookingService = inject(BookingService);

  totalRooms = computed(() => this.roomService.rooms$().length);

  availableRooms = computed(() =>
    this.roomService.rooms$().filter(r => r.status === 'available').length
  );

  occupiedRooms = computed(() =>
    this.roomService.rooms$().filter(r => r.status === 'occupied').length
  );

  activeBookings = computed(() =>
    this.bookingService.bookings$().filter(b => b.status === 'confirmed').length
  );

  occupancyRate = computed(() => {
    const total = this.totalRooms();
    const occupied = this.occupiedRooms();
    return total ? Math.round((occupied / total) * 100) : 0;
  });
}