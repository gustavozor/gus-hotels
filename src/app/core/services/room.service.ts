import { Injectable, signal } from '@angular/core';
import { Room } from '../models/room.model';

@Injectable({ providedIn: 'root' })
export class RoomService {

    private rooms = signal<Room[]>([]);

    rooms$ = this.rooms;

    addRoom(room: Room) {
        this.rooms.update(list => [...list, room]);
    }

    constructor() {
        this.rooms.set([
            { id: '1', number: 101, type: 'single', price: 100, status: 'available' },
            { id: '2', number: 102, type: 'double', price: 150, status: 'occupied' },
            { id: '3', number: 103, type: 'suite', price: 250, status: 'cleaning' },
            { id: '4', number: 104, type: 'single', price: 100, status: 'occupied' }
        ]);
    }
}