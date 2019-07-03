import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { CheckboxComponent } from '../shared/checkbox/checkbox.component';

@NgModule({
  declarations: [UiKitComponent, ButtonComponent, InputComponent, DropdownComponent, CheckboxComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
