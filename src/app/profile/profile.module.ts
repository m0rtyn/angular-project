import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule} from '../shared/shared.module';
import { ProfileComponent } from './profile.component';
import { UserBadgeComponent } from '../shared/user-badge/user-badge.component';
import { ProfileEditDetailsComponent } from './profile-edit-details/profile-edit-details.component';
import { ProfileWorkspaceSettingsComponent } from './profile-workspace-settings/profile-workspace-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    UserBadgeComponent,
    ProfileEditDetailsComponent,
    ProfileWorkspaceSettingsComponent,
    UserBadgeComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ]
})
export class ProfileModule { }
