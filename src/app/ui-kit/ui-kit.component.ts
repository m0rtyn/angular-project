import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ui-kit',
  templateUrl: './ui-kit.component.html',
  styleUrls: ['./ui-kit.component.scss']
})

export class UiKitComponent implements OnInit {

  public uikitForm = this.formBuilder.group({
    value: [''],
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

}
