import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';
import { UserLangService } from 'src/app/services/user-lang.service';
import { Location } from '@angular/common';
import { environment } from 'src/environments/environment';


let apiLoaded = false;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.sass']
})

export class IndexComponent implements OnInit {

  constructor(
    private router: Router,
    private siteService: SiteService,
    private userLangService: UserLangService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  imagesUrl = environment.imagesUrl;
  lang = '';

  data: any;
  page: any;
  alias!: string;
  items = [];

  ngOnInit(): void {

    // let userLang = navigator.language;

    if (!apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }

    this.siteService.getData(location.hostname).subscribe({
      next: (response) => {

        let data = response.body.data;

        this.route.paramMap.subscribe(params => {

          this.data = { ...data };

          let langs = data.setting.langs;

          let alias = params.get('alias');
          let lang = params.get('lang');
          let param = params.get('param');
          let userLang = this.userLangService.getLang();
          let isUserLangCorrect = false;
          
          if (userLang) {
            if (langs.find((e: { code: string | null; }) => e.code === userLang)) {
              isUserLangCorrect = true;
            }
          }

          if (alias) {
            this.alias = alias;
          }

          if (lang) {
            if (langs.find((e: { code: string | null; }) => e.code === lang)) {
              this.lang = lang;
            } else {
              this.lang = this.data.setting.default_lang;
            }
          }

          if (param) {
            if(langs.find((e: { code: string | null; }) => e.code === param)) {
              this.lang = param;
            } else {
              if(userLang && isUserLangCorrect) {
                this.lang = userLang;
              } else {
                this.lang = this.data.setting.default_lang;
              }
              this.alias = param;
            }
          }

          if(!alias && !lang && !param) {
            if(userLang && isUserLangCorrect) {
              this.lang = userLang;
            } else {
              this.lang = this.data.setting.default_lang;
            }
          }

          this.userLangService.setLang(this.lang);

          
          if (this.lang == this.data.setting.default_lang) {
            let url = this.router.createUrlTree(['/']).toString();
            if(this.alias) {
              url = this.router.createUrlTree([this.alias]).toString();
            }
            this.router.navigateByUrl(url);
          }

          if (!lang && this.lang != this.data.setting.default_lang) {
            let url = this.router.createUrlTree([this.lang]).toString();
            if(this.alias) {
              url = this.router.createUrlTree([this.lang, this.alias]).toString();
            }
            this.router.navigateByUrl(url);
          }
          console.log('lang: ', this.lang);
          console.log('alias: ', this.alias);
          
          
          // if (!param && !alias && !lang) {
          //   if (userLang && isUserLangCorrect && this.lang != userLang) {
          //     this.lang = userLang;
          //     this.router.navigate([userLang]);
          //   } else {
          //     this.lang = this.data.setting.default_lang;
          //   }
          //   this.alias = 'home';
          // }

          // if (param) {
          //   if (param == this.data.setting.default_lang) {
          //     this.router.navigate(['/']);
          //   }
          //   if (langs.find((e: { code: string | null; }) => e.code === param)) {
          //     this.lang = param;
          //   } else {
          //     this.lang = this.data.setting.default_lang;
          //     this.alias = param;
          //   }
          // }

          // if (!lang && isUserLangCorrect && this.lang != userLang) {
          //   console.log('test');
          //   if(param) {
          //     this.router.navigate([userLang, param]);
          //   } else {
          //   }
          // }


          // console.log(langs.find((e: { code: string | null; }) => e.code === alias));

          this.data.pages = this.data.pages.map((e: any) => {
            let page: any;
            page = new Object;
            page.alias = e.alias;
            page = { ...page, ...e.data.find((e: { lang: string }) => e.lang === this.lang) };
            delete page.lang;
            return page;
          });

          this.alias = this.alias ? this.alias : '';

          this.page = this.data.pages.find((e: { alias: string }) => e.alias === this.alias);

          this.siteService.setSiteData(this.data);

          // console.log('data', this.data);
          // this.mathParams(params);
          // if(!this.page) {
          //   this.router.navigate([`404`]);
          // }
          // console.log('lang', this.lang);
        });
      }
    });
  }

}
