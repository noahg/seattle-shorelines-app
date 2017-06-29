import { TestBed, inject } from '@angular/core/testing';

import { ShorelineService } from './shoreline.service';

describe('ShorelineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShorelineService]
    });
  });

  it('should be created', inject([ShorelineService], (service: ShorelineService) => {
    expect(service).toBeTruthy();
  }));
});
