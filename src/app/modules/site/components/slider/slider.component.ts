import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import Swiper, { SwiperOptions } from 'swiper';
import { environment } from 'src/environments/environment';
// register Swiper custom elements
register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {

  infinitLoad: any;

  constructor() { }

  @ViewChild('swiperRef', { static: true })
  protected _swiperRef!: ElementRef;
  swiper!: Swiper;

  @Input() items: any;

  imagesUrl = environment.imagesUrl;

  ngOnInit(): void {
    this._initSwiper()
  }

  private _initSwiper() {
    const options: SwiperOptions = {
      pagination: { clickable: true },
      slidesPerView: 1,
      spaceBetween: 30,
      effect: "fade",
      navigation: true,
      // loop: true
      // breakpoints: this._getBreakpoints(), // In case you wish to calculate base on the `items` length
      injectStyles: [
        `
        :root{
          --swiper-theme-color: #FB7185;
          --swiper-pagination-bullet-size: 12px;
        }
        `,
      ],
    }
  
    const swiperEl = this._swiperRef.nativeElement
    Object.assign(swiperEl, options)
  
    swiperEl.initialize()
  
    if (this.swiper) this.swiper.currentBreakpoint = false // Breakpoint fixes
    this.swiper = this._swiperRef.nativeElement.swiper
  
    this.swiper.off('slideChange') // Avoid multiple subscription, in case you wish to call the `_initSwiper()` multiple time
  
    this.swiper.on('slideChange', () => { // Any change subscription you wish
      this.infinitLoad?.triggerOnScroll()
    })
  }

}
