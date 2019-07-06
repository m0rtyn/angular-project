import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserBadgeComponent } from '../shared/user-badge/user-badge.component';

@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    UserBadgeComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
