import { Injectable, signal } from '@angular/core';
import { Guest } from '../models/guest.model';

@Injectable({ providedIn: 'root' })
export class GuestService {

  private guests = signal<Guest[]>([]);

  guests$ = this.guests;

  constructor() {
    // mock inicial
    this.guests.set([
      { id: '1', name: 'John Doe', email: 'john@email.com', phone: '123456' },
      { id: '2', name: 'Anna Smith', email: 'anna@email.com' }
    ]);
  }

  addGuest(guest: Guest) {
    this.guests.update(list => [...list, guest]);
  }

  getGuestById(id: string) {
    return this.guests().find(g => g.id === id);
  }
}