import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageLayoutModule } from './page-layout/page-layout.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    PageLayoutModule
    // RouterModule.forRoot([
    //   { path: '', component: AppComponent }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
