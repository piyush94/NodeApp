import { TestBed, inject } from '@angular/core/testing';

import { RhService } from './rh.service';

describe('RhService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhService]
    });
  });

  it('should be created', inject([RhService], (service: RhService) => {
    expect(service).toBeTruthy();
  }));
});
