import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent {

  @Input() size = 'small';
  @Input() firstName = 'Константин';
  @Input() lastName = 'Константинопольский';
  @Input() position = '—';

  get fullName() {
    return `${this.firstName}${this.size !== 'small' ? ' ' + this.lastName : ''}`;
  }
}
