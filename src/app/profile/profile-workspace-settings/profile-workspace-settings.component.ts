import { Component, OnInit } from '@angular/core';
import { Settings } from './settings';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'profile-workspace-settings',
  templateUrl: './profile-workspace-settings.component.html',
  styleUrls: ['./profile-workspace-settings.component.scss']
})

export class ProfileWorkspaceSettingsComponent {

  public languages = [
    { name: 'en', value: 'English' },
    { name: 'ru', value: 'Russian' },
    { name: 'de', value: 'Deughcths' },
    { name: 'ch', value: 'Chinese' },
    { name: 'uk', value: 'Seven Unated Kingdoms' },
  ];

  public workspaceSettingForm = this.fb.group({
    timezones: [''],
    languages: [''],
    taskStatus: ['']
  });

  public timezones = [
    { name: 'gmt+7', value: '(GMT+7) Pacific day time' },
    { name: 'gmt+6', value: '(GMT+6) Somewhere' },
    { name: 'gmt+5', value: '(GMT+5) Somewhere' },
    { name: 'gmt+4', value: '(GMT+4) Somewhere' },
    { name: 'gmt+3', value: '(GMT+3) Somewhere' },
  ];

  public taskStatus = [
    { name: 'backlogged', value: 'backlogged' },
    { name: 'done', value: 'done' },
  ];
  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log(this.workspaceSettingForm.value);
  };
}
