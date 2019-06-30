import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiKitComponent } from './ui-kit.component';
import { ButtonComponent } from '../shared/button/button.component';
import { InputComponent } from '../shared/input/input.component';



@NgModule({
  declarations: [UiKitComponent, ButtonComponent, InputComponent],
  imports: [
    CommonModule
  ]
})
export class UiKitModule { }
