import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomService } from '../../../core/services/room.service';

@Component({
  selector: 'app-room-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent {
  private roomService = inject(RoomService);

  rooms = this.roomService.rooms$;

  addMockRoom() {
    this.roomService.addRoom({
      id: Date.now().toString(),
      number: Math.floor(Math.random() * 100) + 200,
      type: 'single',
      price: 120,
      status: 'available'
    });
  }
}