import { Component } from '@angular/core';
import { Details } from './details';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'profile-edit-details',
  templateUrl: './profile-edit-details.component.html',
  styleUrls: ['../profile.component.scss', './profile-edit-details.component.scss']
})
export class ProfileEditDetailsComponent {

  public profileForm = this.formBuilder.group({
    firstName: [''],
    lastName: [''],
    companyName: [''],
    jobTitle: [''],
    location: [''],
    phoneNumber: ['']
  });

  constructor(private formBuilder: FormBuilder) {}

  // model = new Details();
  // submitted = false;

  onSubmit() {
    console.log(this.profileForm.value);
  }
}
