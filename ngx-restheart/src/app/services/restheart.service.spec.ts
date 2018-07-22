import { TestBed, inject } from '@angular/core/testing';

import { RestheartService } from './restheart.service';

describe('RestheartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestheartService]
    });
  });

  it('should be created', inject([RestheartService], (service: RestheartService) => {
    expect(service).toBeTruthy();
  }));
});
