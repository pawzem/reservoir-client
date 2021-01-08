import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkstationCreationComponent } from './workstation-creation.component';

describe('WorkstationCreationComponent', () => {
  let component: WorkstationCreationComponent;
  let fixture: ComponentFixture<WorkstationCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkstationCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkstationCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
