import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitModule} from '../ui-kit/ui-kit.module';
import { ProfileComponent } from './profile.component';
import { ProfileAvatarComponent } from './profile-avatar/profile-avatar.component';
import { ProfileEditDetailsComponent } from './profile-edit-details/profile-edit-details.component';
import { ProfileWorkspaceSettingsComponent } from './profile-workspace-settings/profile-workspace-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileAvatarComponent,
    ProfileEditDetailsComponent,
    ProfileWorkspaceSettingsComponent,
    ProfileAvatarComponent,
  ],
  imports: [
    CommonModule,
    UiKitModule
  ]
})
export class ProfileModule { }
