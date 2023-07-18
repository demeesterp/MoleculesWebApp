import { TestBed } from '@angular/core/testing';

import { CalcOrderRepoService } from './calc-order-repo.service';

describe('CalcOrderRepoService', () => {
  let service: CalcOrderRepoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcOrderRepoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
