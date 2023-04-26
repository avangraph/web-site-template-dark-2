import { Component, OnInit } from '@angular/core';
import { SiteService } from 'src/app/services/site.service';
import { UserLangService } from 'src/app/services/user-lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor(
    private siteService: SiteService,
    private userLangService: UserLangService,
  ) { }

  isMenuOpen = false;
  isOverlayShow = false;
  someExpression: any = false;
  siteData: any;
  activeLang = 'en';

  ngOnInit(): void {
    this.userLangService.lang$.subscribe({
      next: (lang: any) => {
        this.activeLang = lang;
      }
    });

    this.siteService.siteData$.subscribe({
      next: (siteData) => {
        this.siteData = siteData;
      }
    });
  }


  openMenu(): void {
    if (!this.isMenuOpen) {
      this.isMenuOpen = true;
    } else {
      this.isMenuOpen = false;
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

}
