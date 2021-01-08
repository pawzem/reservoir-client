import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder} from '@angular/forms';
import {OrganizationClientService} from '../clients/organization-client.service';
import {Workstation} from '../clients/organization';

@Component({
  selector: 'app-workstation-creation',
  templateUrl: './workstation-creation.component.html',
  styleUrls: ['./workstation-creation.component.css']
})
export class WorkstationCreationComponent implements OnInit {
  @Input() branchId: string;
  workstationForm;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder,
              private organizationClient: OrganizationClientService) {
    this.workstationForm = this.formBuilder.group({
      workstationName: ''
    });
  }

  ngOnInit(): void {
  }

  onClickSubmit(workstationForm): void{
    const workstation = new Workstation(this.branchId,
      null,
      workstationForm.workstationName);
    this.organizationClient.addWorkstation(workstation).subscribe(
      success => {
        this.activeModal.close();
      }
    );
  }
}
