import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from './page-layout/page-layout.module';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { ProfileModule } from './profile/profile.module';
import { AppComponent } from './app.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { ProfileComponent } from './profile/profile.component';


const appRoutes = [
  // { path: '', component: AppComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ui-kit', component: UiKitComponent }
];
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PageLayoutModule,
    UiKitModule,
    ProfileModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
