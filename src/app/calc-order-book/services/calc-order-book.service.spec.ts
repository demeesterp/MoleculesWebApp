import { TestBed } from '@angular/core/testing';

import { CalcOrderBookService } from './calc-order-book.service';

describe('CalcOrderService', () => {
  let service: CalcOrderBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalcOrderBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
