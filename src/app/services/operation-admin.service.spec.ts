import { TestBed } from '@angular/core/testing';

import { OperationAdminService } from './operation-admin.service';

describe('OperationAdminService', () => {
  let service: OperationAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OperationAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
