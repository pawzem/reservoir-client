import {Component, OnInit} from '@angular/core';
import {Branch} from '../clients/organization';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {OrganizationClientService} from '../clients/organization-client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BranchCreationComponent} from '../branch-creation/branch-creation.component';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  public branches: Branch[] = [];
  private companyId: string;

  constructor(private modalService: NgbModal,
              private router: Router,
              private route: ActivatedRoute,
              private organizationClient: OrganizationClientService) { }

  ngOnInit(): void {
    this.companyId = this.route.snapshot.paramMap.get('companyId');

    if (this.companyId){
      this.organizationClient.getBranches(this.companyId)
        .subscribe(data => {
          this.branches = data;
        });
    }
  }

  openBranchCreation(): void {
    const modalRef = this.modalService.open(BranchCreationComponent);
    modalRef.componentInstance.companyId = this.companyId;
  }

  public navigateToWorkstations(branchId: string): Promise<boolean>{
    return this.router.navigate(['branches/' + branchId + '/workstations']);
  }

}
