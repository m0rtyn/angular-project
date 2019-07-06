import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../page-layout.component.scss', './header.component.scss']
})

export class HeaderComponent {

  opened = false;

  toggleDropdown() {
    console.log(this.opened);
    this.opened = !this.opened;
  }

}
