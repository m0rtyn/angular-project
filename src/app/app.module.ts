import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PageLayoutModule } from './page-layout/page-layout.module';
import { UiKitModule } from './ui-kit/ui-kit.module';
import { ProfileModule } from './profile/profile.module';
import { AppComponent } from './app.component';
import { UiKitComponent } from './ui-kit/ui-kit.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'ui-kit', component: UiKitComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
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
