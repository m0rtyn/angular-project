import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputFieldComponent } from './input-field/input-field.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';

const components = [InputFieldComponent, ButtonComponent, DropdownComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
