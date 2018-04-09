import { TestBed, inject } from '@angular/core/testing';

import { SharedDataServiceService } from './shared-data-service.service';

describe('SharedDataServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedDataServiceService]
    });
  });

  it('should be created', inject([SharedDataServiceService], (service: SharedDataServiceService) => {
    expect(service).toBeTruthy();
  }));
});
