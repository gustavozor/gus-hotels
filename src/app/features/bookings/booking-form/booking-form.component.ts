import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../core/services/booking.service';
import { RoomService } from '../../../core/services/room.service';

@Component({
  selector: 'app-booking-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {

  private bookingService = inject(BookingService);
  private roomService = inject(RoomService);

  rooms = this.roomService.rooms$;

  selectedRoomId = '';
  checkIn = '';
  checkOut = '';

  errorMessage = '';

  createBooking() {
    try {
      this.bookingService.createBooking({
        id: Date.now().toString(),
        guestId: '1',
        roomId: this.selectedRoomId,
        checkIn: new Date(this.checkIn),
        checkOut: new Date(this.checkOut),
        totalPrice: 0,
        status: 'confirmed'
      });

      this.errorMessage = '';
      alert('Booking created!');
    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }
}