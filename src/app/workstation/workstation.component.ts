import {Component, OnInit} from '@angular/core';
import {Workstation} from '../clients/organization';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {OrganizationClientService} from '../clients/organization-client.service';
import {WorkstationCreationComponent} from '../workstation-creation/workstation-creation.component';

@Component({
  selector: 'app-workstation',
  templateUrl: './workstation.component.html',
  styleUrls: ['./workstation.component.css']
})
export class WorkstationComponent implements OnInit {

  public workstations: Workstation[] = [];
  private branchId: string;

  constructor(private modalService: NgbModal,
              private route: ActivatedRoute,
              private organizationClient: OrganizationClientService) { }

  ngOnInit(): void {
    this.branchId = this.route.snapshot.paramMap.get('branchId');

    if (this.branchId){
      this.organizationClient.getWorkstations(this.branchId)
        .subscribe(data => {
          this.workstations = data;
        });
    }
  }

  openWorkstationCreation(): void {
    const modalRef = this.modalService.open(WorkstationCreationComponent);
    modalRef.componentInstance.branchId = this.branchId;
  }

}
