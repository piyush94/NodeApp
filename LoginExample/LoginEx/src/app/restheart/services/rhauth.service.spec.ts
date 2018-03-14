import { TestBed, inject } from '@angular/core/testing';

import { RhauthService } from './rhauth.service';

describe('RhauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RhauthService]
    });
  });

  it('should be created', inject([RhauthService], (service: RhauthService) => {
    expect(service).toBeTruthy();
  }));
});
