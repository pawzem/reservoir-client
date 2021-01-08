import {Component, OnInit} from '@angular/core';
import {Branch} from '../clients/organization';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationClientService} from '../clients/organization-client.service';
import {OrganizationCreationComponent} from '../organization-creation/organization-creation.component';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  public branches: Branch[] = [];

  constructor(private modalService: NgbModal,
              private route: ActivatedRoute,
              private organizationClient: OrganizationClientService) { }

  ngOnInit(): void {
    const companyId = this.route.snapshot.paramMap.get('companyId');

    if (companyId){
      this.organizationClient.getBranches(companyId)
        .subscribe(data => {
          this.branches = data;
        });
    }
  }

  openOrganizationCreation(): void {
    const modalRef = this.modalService.open(OrganizationCreationComponent);
    modalRef.componentInstance.name = 'OrganizationCreation';
  }

}
