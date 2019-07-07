import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
