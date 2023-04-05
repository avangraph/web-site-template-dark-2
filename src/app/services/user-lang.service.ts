import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLangService implements OnInit {

  public lang$ = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  setLang(lang: string): void {
    localStorage.setItem('lang', lang);
    this.lang$.next(lang);
  }

  getLang() {
    let lang = localStorage.getItem('lang');
    return lang;
  }
}
