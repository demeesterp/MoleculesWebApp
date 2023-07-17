import { TestBed } from '@angular/core/testing';

import { MolHttpClientService } from './mol-http-client.service';

describe('MolHttpClientService', () => {
  let service: MolHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
