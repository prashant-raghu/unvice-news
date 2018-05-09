import { TestBed, inject } from '@angular/core/testing';

import { InfyscrollService } from './infyscroll.service';

describe('InfyscrollService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfyscrollService]
    });
  });

  it('should be created', inject([InfyscrollService], (service: InfyscrollService) => {
    expect(service).toBeTruthy();
  }));
});
