import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SiteRoutingModule } from './site-routing.module';
import { SiteComponent } from './site.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { IndexComponent } from './pages/index/index.component';
import { SharedModule } from "../../shared/shared.module";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SliderComponent } from './components/slider/slider.component';


@NgModule({
    declarations: [
        SiteComponent,
        AboutComponent,
        ContactsComponent,
        IndexComponent,
        NotFoundComponent,
        SliderComponent
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        SharedModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SiteModule { }
