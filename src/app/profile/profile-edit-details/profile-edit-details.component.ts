import { Component } from '@angular/core';
import { Details } from './details';

@Component({
  selector: 'profile-edit-details',
  templateUrl: './profile-edit-details.component.html',
  styleUrls: ['../profile.component.scss', './profile-edit-details.component.scss']
})
export class ProfileEditDetailsComponent {

  model = new Details();
}
