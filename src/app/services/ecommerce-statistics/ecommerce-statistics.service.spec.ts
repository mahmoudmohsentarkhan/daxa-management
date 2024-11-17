import { TestBed } from '@angular/core/testing';

import { EcommerceStatisticsService } from './ecommerce-statistics.service';

describe('EcommerceStatisticsService', () => {
  let service: EcommerceStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcommerceStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
