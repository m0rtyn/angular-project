import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

interface SelectData {
  value: any;
  name: string;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() control: FormControl;
  @Input() options: SelectData[];
  @Input() placeholder = '';
  @Input() error = false;
  @Input() disabled = false;

}
