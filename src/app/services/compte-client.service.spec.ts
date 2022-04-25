import { TestBed } from '@angular/core/testing';

import { CompteClientService } from './compte-client.service';

describe('CompteClientService', () => {
  let service: CompteClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompteClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
