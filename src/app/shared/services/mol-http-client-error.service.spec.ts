import { TestBed } from '@angular/core/testing';

import { MolHttpClientErrorService } from './mol-http-client-error.service';

describe('MolHttpClientErrorService', () => {
  let service: MolHttpClientErrorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolHttpClientErrorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
