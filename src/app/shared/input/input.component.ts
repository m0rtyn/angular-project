import { Component, OnInit, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() {}

  @Input() control: FormControl;
  @Input() placeholder = '';
  @Input() error = false;
  @Input() disabled = false;
  @Input() type = 'text';
  @Input() name = '';

  ngOnInit() {
  }

}
