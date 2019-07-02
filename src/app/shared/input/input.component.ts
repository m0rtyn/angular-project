import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() {}

  @Input() placeholder = '';
  @Input() error = false;
  @Input() disabled = false;

  ngOnInit() {
  }

}
