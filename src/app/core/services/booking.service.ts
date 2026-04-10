import { Injectable, signal } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {

    private bookings = signal<Booking[]>([]);

    bookings$ = this.bookings;

    constructor() {
        // initial mock
        this.bookings.set([
            {
                id: '1',
                guestId: '1',
                roomId: '2',
                checkIn: new Date(),
                checkOut: new Date(new Date().getTime() + 86400000),
                totalPrice: 150,
                status: 'confirmed',
                notes: ''
            }
        ]);
    }

    createBooking(newBooking: Booking) {

        const conflict = this.bookings().some(b =>
            b.roomId === newBooking.roomId &&
            newBooking.checkIn < b.checkOut &&
            newBooking.checkOut > b.checkIn
        );

        if (conflict) {
            throw new Error('Room already booked for selected dates');
        }

        this.bookings.update(list => [...list, newBooking]);
    }

    getBookings() {
        return this.bookings();
    }

    isRoomAvailable(roomId: string, checkIn: Date, checkOut: Date): boolean {
        return !this.bookings().some(b =>
            b.roomId === roomId &&
            b.status === 'confirmed' &&
            checkIn < b.checkOut &&
            checkOut > b.checkIn
        );
    }
}