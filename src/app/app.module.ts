import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes = [
  { path: '', component: OrganizationComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false // for Debugging of the Routes
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
