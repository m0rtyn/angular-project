import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { ProfileEditDetailsComponent } from './profile-edit-details/profile-edit-details.component';
import { ProfileWorkspaceSettingsComponent } from './profile-workspace-settings/profile-workspace-settings.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileEditDetailsComponent,
    ProfileWorkspaceSettingsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
  ]
})
export class ProfileModule { }
