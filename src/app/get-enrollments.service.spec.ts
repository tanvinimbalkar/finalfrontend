import { TestBed } from '@angular/core/testing';

import { GetEnrollmentsService } from './get-enrollments.service';

describe('GetEnrollmentsService', () => {
  let service: GetEnrollmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetEnrollmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
