import { TestBed, inject } from '@angular/core/testing';

import { FakeUserRegistrationService } from './fake-user-registration.service';

describe('FakeUserRegistrationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeUserRegistrationService]
    });
  });

  it('should be created', inject([FakeUserRegistrationService], (service: FakeUserRegistrationService) => {
    expect(service).toBeTruthy();
  }));
});
