/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RetroService } from './Retro.service';

describe('Service: Retro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RetroService]
    });
  });

  it('should ...', inject([RetroService], (service: RetroService) => {
    expect(service).toBeTruthy();
  }));
});