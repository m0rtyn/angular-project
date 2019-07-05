import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'profile-avatar',
  templateUrl: './profile-avatar.component.html',
  styleUrls: ['./profile-avatar.component.scss']
})
export class ProfileAvatarComponent implements OnInit {

  @Input() size = 'small';

  constructor() { }

  ngOnInit() {
  }

}
