import { Injectable, signal } from '@angular/core';
import { Room } from '../models/room.model';
import { Booking } from '../models/booking.model';

@Injectable({ providedIn: 'root' })
export class RoomService {

  private rooms = signal<Room[]>([]);

  rooms$ = this.rooms;

  constructor() {
    this.rooms.set([
      { id: '1', number: 101, type: 'single', price: 100, status: 'available' },
      { id: '2', number: 102, type: 'double', price: 150, status: 'available' },
      { id: '3', number: 103, type: 'suite', price: 250, status: 'available' }
    ]);
  }

  addRoom(room: Room) {
    this.rooms.update(list => [...list, room]);
  }

  getRoomById(id: string) {
    return this.rooms().find(r => r.id === id);
  }

  getRoomStatus(roomId: string, bookings: Booking[]): 'available' | 'occupied' {

    const today = new Date();

    const isOccupied = bookings.some(b =>
      b.roomId === roomId &&
      b.status === 'confirmed' &&
      today >= b.checkIn &&
      today < b.checkOut
    );

    return isOccupied ? 'occupied' : 'available';
  }
}