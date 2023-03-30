import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  isMenuOpen = false;
  isOverlayShow = false;
  someExpression: any = false;

  ngOnInit(): void {
  }


  openMenu(): void {
    if(!this.isMenuOpen) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
