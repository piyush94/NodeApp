import { TestBed, inject } from '@angular/core/testing';

import { NgxRestheartService } from './ngx-restheart.service';

describe('NgxRestheartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxRestheartService]
    });
  });

  it('should be created', inject([NgxRestheartService], (service: NgxRestheartService) => {
    expect(service).toBeTruthy();
  }));
});
