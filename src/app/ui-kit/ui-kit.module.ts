import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    UiKitComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  // exports: [ButtonComponent, InputComponent, DropdownComponent, CheckboxComponent]
})
export class UiKitModule { }
