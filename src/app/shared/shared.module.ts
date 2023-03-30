import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';
import { AppRoutingModule } from '../app-routing.module';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GoogleMapsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    GoogleMapsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    GoogleMapsComponent
  ]
})
export class SharedModule { }
