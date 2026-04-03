import { Injectable, signal } from '@angular/core';
import { Booking } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class BookingService {

    private bookings = signal<Booking[]>([]);

    bookings$ = this.bookings;

    constructor() {
        this.bookings.set([
            {
                id: '1',
                guestId: '1',
                roomId: '2',
                checkIn: new Date(),
                checkOut: new Date(),
                totalPrice: 300,
                status: 'confirmed'
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
}