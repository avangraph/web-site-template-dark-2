import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { IndexComponent } from './pages/index/index.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: "",
    component: SiteComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: "contacts", component: ContactsComponent },
      { path: "about", component: AboutComponent },
    //   { path: "terms-of-use", component: TermsOfUseComponent },
    //   { path: "privacy-policy", component: PrivacyPolicyComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SiteRoutingModule { }
