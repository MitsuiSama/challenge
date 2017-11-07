import { TestBed, inject } from '@angular/core/testing';

import { MockUserService } from './mock-user.service';

describe('MockUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockUserService]
    });
  });

  it('should be created', inject([MockUserService], (service: MockUserService) => {
    expect(service).toBeTruthy();
  }));
});
