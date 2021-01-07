import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../clients/organization';
import {OrganizationClientService} from '../clients/organization-client.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationCreationComponent} from '../organization-creation/organization-creation.component';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css']
})
export class OrganizationComponent implements OnInit {

  public organizations: Organization[] = [];

  constructor(private modalService: NgbModal,
              private organizationClient: OrganizationClientService) { }

  ngOnInit(): void {
    this.organizationClient.getOrganizations()
      .subscribe(data => {
          this.organizations = data;
        });
  }

  //  ngOnInit() {
  //   this.data.loadProducts()
  //     .subscribe(success => {
  //       if (success) {
  //         this.products = this.data.products;
  //       }
  //     });
  // }
//   addProduct(product: Product) {
//     this.data.AddToOrder(product);
//   }

  openOrganizationCreation(): void {
    const modalRef = this.modalService.open(OrganizationCreationComponent);
    modalRef.componentInstance.name = 'OrganizationCreation';
  }
}
