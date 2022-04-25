import { TestBed } from '@angular/core/testing';

import { ComptesAdminService } from './comptes-admin.service';

describe('ComptesAdminService', () => {
  let service: ComptesAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptesAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
