import { TestBed } from '@angular/core/testing';

import { FakerService } from './faker.service';

describe('FakerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakerService = TestBed.get(FakerService);
    expect(service).toBeTruthy();
  });
});
