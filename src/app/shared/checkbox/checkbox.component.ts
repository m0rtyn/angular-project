import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() error = false;
  @Input() disabled = false;
  @Input() checked = false;
  constructor() {
    this.isChecked = this.checked;
  }

  isChecked: boolean;

  ngOnInit() {
  }

  handleClick() {
    this.isChecked = !this.isChecked;
  }
}
