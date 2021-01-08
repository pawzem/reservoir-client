import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrganizationComponent } from './organization/organization.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { OrganizationCreationComponent } from './organization-creation/organization-creation.component';
import {ReactiveFormsModule} from '@angular/forms';
import { BranchComponent } from './branch/branch.component';
import { BranchCreationComponent } from './branch-creation/branch-creation.component';
import { WorkstationComponent } from './workstation/workstation.component';
import { WorkstationCreationComponent } from './workstation-creation/workstation-creation.component';

const routes = [
  { path: '',
    component: OrganizationComponent,
  },
  { path: 'organizations/:companyId/branches',
    component: BranchComponent,
  },
  { path: 'branches/:branchId/workstations',
    component: WorkstationComponent,
  },

];

@NgModule({
  declarations: [
    AppComponent,
    OrganizationComponent,
    HeaderComponent,
    FooterComponent,
    OrganizationCreationComponent,
    BranchComponent,
    BranchCreationComponent,
    WorkstationComponent,
    WorkstationCreationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: false,
      enableTracing: false // for Debugging of the Routes
    }),
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
