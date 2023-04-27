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
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Cover2Component } from './components/cover2/cover2.component';


@NgModule({
    declarations: [
        SiteComponent,
        AboutComponent,
        ContactsComponent,
        IndexComponent,
        NotFoundComponent,
        SliderComponent,
        FormComponent,
        Cover2Component
    ],
    imports: [
        CommonModule,
        SiteRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SiteModule { }
