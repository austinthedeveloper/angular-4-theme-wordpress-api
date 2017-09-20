/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProcessingService } from './Processing.service';

describe('Service: Processing', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProcessingService]
    });
  });

  it('should ...', inject([ProcessingService], (service: ProcessingService) => {
    expect(service).toBeTruthy();
  }));
});