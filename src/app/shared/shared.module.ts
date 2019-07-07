import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { UserBadgeComponent} from './user-badge/user-badge.component';

const components = [InputComponent, ButtonComponent, DropdownComponent, CheckboxComponent, UserBadgeComponent];

@NgModule({
  declarations: [...components, CheckboxComponent],
  imports: [
    CommonModule
  ],
  exports: [...components]
})
export class SharedModule { }
