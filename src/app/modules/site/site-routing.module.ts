import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SiteComponent } from './site.component';

const routes: Routes = [
  {
    path: "",
    component: SiteComponent,
    children: [
      { path: "", component: IndexComponent },
      { path: ":param", component: IndexComponent },
      { path: ":lang/:alias", component: IndexComponent },
      // { path: ":param", component: IndexComponent },
      // { path: "about", component: AboutComponent },
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
