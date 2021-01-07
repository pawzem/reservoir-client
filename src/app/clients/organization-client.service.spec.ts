import { TestBed } from '@angular/core/testing';

import { OrganizationClientService } from './organization-client.service';

describe('OrganizationClientService', () => {
  let service: OrganizationClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrganizationClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
