import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarLayoutComponent } from './toolbar-layout/toolbar-layout.component';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { PageLayoutComponent } from './page-layout.component';

@NgModule({
  declarations: [ToolbarLayoutComponent, SidebarLayoutComponent, PageLayoutComponent],
  imports: [
    CommonModule
  ],
  exports: [PageLayoutComponent]
})
export class PageLayoutModule { }
