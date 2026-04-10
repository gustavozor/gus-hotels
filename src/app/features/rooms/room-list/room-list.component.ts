import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../../core/services/room.service';
import { BookingService } from '../../../core/services/booking.service';
import { GuestService } from '../../../core/services/guest.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {

  private roomService = inject(RoomService);
  private bookingService = inject(BookingService);
  private guestService = inject(GuestService);

  rooms = this.roomService.rooms$;
  bookings = this.bookingService.bookings$;

  addMockRoom(): void {
    this.roomService.addRoom({
      id: Date.now().toString(),
      number: Math.floor(Math.random() * 100) + 200,
      type: 'single',
      price: 120,
      status: 'available'
    });
  }

  getStatus(roomId: string): string {
    return this.roomService.getRoomStatus(roomId, this.bookings());
  }

  getCurrentBooking(roomId: string) {
    const today = new Date();

    return this.bookings().find(b =>
      b.roomId === roomId &&
      b.status === 'confirmed' &&
      today >= b.checkIn &&
      today < b.checkOut
    );
  }

  getGuestName(guestId: string): string {
    const guest = this.guestService.getGuestById(guestId);
    return guest?.name || 'Unknown';
  }
}