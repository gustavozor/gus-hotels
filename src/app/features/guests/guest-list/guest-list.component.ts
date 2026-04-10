import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GuestService } from '../../../core/services/guest.service';

@Component({
  selector: 'app-guest-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.scss']
})
export class GuestListComponent {

  private guestService = inject(GuestService);

  guests = this.guestService.guests$;

  name = '';
  email = '';
  phone = '';

  addGuest() {
    if (!this.name || !this.email) return;

    this.guestService.addGuest({
      id: Date.now().toString(),
      name: this.name,
      email: this.email,
      phone: this.phone
    });

    // reset
    this.name = '';
    this.email = '';
    this.phone = '';
  }

  searchGuest() {}

  clear() {}
}