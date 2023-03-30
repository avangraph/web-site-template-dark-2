import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { SharedModule } from "./shared/shared.module";
import { CommonModule } from '@angular/common';
import { SiteModule } from './modules/site/site.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        HttpClientJsonpModule,
        SharedModule,
        SiteModule
    ]
})
export class AppModule { }
