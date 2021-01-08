import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {OrganizationClientService} from '../clients/organization-client.service';
import {Branch} from '../clients/organization';

@Component({
  selector: 'app-branch-creation',
  templateUrl: './branch-creation.component.html',
  styleUrls: ['./branch-creation.component.css']
})
export class BranchCreationComponent implements OnInit {
  @Input() companyId: string;
  branchForm;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private organizationClient: OrganizationClientService) {
    this.branchForm = this.formBuilder.group({
      branchName: '',
      email: '',
      phone: '',
      url: ''
    });
  }

  ngOnInit(): void {
  }

  onClickSubmit(branchForm): void{
    const branch = new Branch(this.companyId,
      branchForm.branchName,
      branchForm.phone,
      branchForm.email,
      branchForm.url);
    this.organizationClient.addBranch(branch).subscribe(
      success => {
        this.activeModal.close();
      }, error => {
        alert('Branch creation failed reason: ' + error.message);
      }
    );
  }
}
