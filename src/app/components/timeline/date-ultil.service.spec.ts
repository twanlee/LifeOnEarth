import { TestBed } from '@angular/core/testing';

import { DateUltilService } from './date-ultil.service';

describe('DateUltilService', () => {
  let service: DateUltilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateUltilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
