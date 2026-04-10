import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BookingService } from '../../../core/services/booking.service';
import { RoomService } from '../../../core/services/room.service';
import { GuestService } from '../../../core/services/guest.service';

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
  private guestService = inject(GuestService);

  rooms = this.roomService.rooms$;
  guests = this.guestService.guests$;

  selectedRoomId: string = '';
  selectedGuestId: string = '';
  checkIn: string = '';
  checkOut: string = '';
  notes: string = '';

  errorMessage: string = '';

  createBooking() {

    // basic validations
    if (!this.selectedRoomId || !this.selectedGuestId || !this.checkIn || !this.checkOut) {
      this.errorMessage = 'Please fill all fields';
      return;
    }

    const checkInDate = new Date(this.checkIn);
    const checkOutDate = new Date(this.checkOut);

    // date validation
    if (checkOutDate <= checkInDate) {
      this.errorMessage = 'Check-out must be after check-in';
      return;
    }

    // price calculation
    const nights = Math.ceil(
      (checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)
    );

    const room = this.roomService.getRoomById(this.selectedRoomId);
    const totalPrice = nights * (room?.price || 0);

    try {
      this.bookingService.createBooking({
        id: Date.now().toString(),
        guestId: this.selectedGuestId,
        roomId: this.selectedRoomId,
        checkIn: checkInDate,
        checkOut: checkOutDate,
        totalPrice,
        status: 'confirmed'
      });

      // clean form
      this.selectedRoomId = '';
      this.selectedGuestId = '';
      this.checkIn = '';
      this.checkOut = '';
      this.errorMessage = '';
      this.notes = '';

      alert('Booking created!');

    } catch (err: any) {
      this.errorMessage = err.message;
    }
  }

  isRoomAvailable(roomId: string): boolean {
    if (!this.checkIn || !this.checkOut) return true;

    return this.bookingService.isRoomAvailable(
      roomId,
      new Date(this.checkIn),
      new Date(this.checkOut)
    );
  }
}