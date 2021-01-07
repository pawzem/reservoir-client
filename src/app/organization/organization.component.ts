import {Component, Input, OnInit} from '@angular/core';
import {Organization} from '../clients/organization';
import {OrganizationClientService} from '../clients/organization-client.service';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-organization-creation-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{name}}!</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
    </div>
  `
})
export class OrganizationCreationModal{
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}


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
    const modalRef = this.modalService.open(OrganizationCreationModal);
    modalRef.componentInstance.name = 'OrganizationCreation';
  }
}
