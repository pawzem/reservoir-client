import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationClientService} from '../clients/organization-client.service';
import { FormBuilder } from '@angular/forms';
import {Organization} from "../clients/organization";
import {Router} from "@angular/router";

@Component({
  selector: 'app-organization-creation',
  templateUrl: './organization-creation.component.html',
  styleUrls: ['./organization-creation.component.css']
})
export class OrganizationCreationComponent implements OnInit {
  @Input() name;
  organizationForm;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private organizationClient: OrganizationClientService,
              private router: Router) {
    this.organizationForm = this.formBuilder.group({
      organizationName: '',
      email: '',
      phone: '',
      url: ''
    });
  }

  ngOnInit(): void {
  }

  onClickSubmit(organizationForm): void{
    const organization = new Organization(organizationForm.organizationName,
      organizationForm.phone,
      organizationForm.email,
      organizationForm.url);
    this.organizationClient.addFirm(organization).subscribe(
      success => {
        this.activeModal.close();
      }
      // , error => {
      //   alert('Organization creation failed reason: ' + error.message);
      // }
    );
  }
}
