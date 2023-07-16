import { TestBed } from '@angular/core/testing';

import { CalcOrderService } from './calc-order.service';

describe('CalcOrderService', () => {
  let service: CalcOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
