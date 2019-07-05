import { Component, Input } from '@angular/core';

@Component({
  selector: 'user-badge',
  templateUrl: './user-badge.component.html',
  styleUrls: ['./user-badge.component.scss']
})
export class UserBadgeComponent {

  @Input() size = 'small';
  @Input() fullName = 'noname';
  @Input() position = '—';
}
