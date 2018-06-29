/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HeroserviceService } from './heroservice.service';

describe('HeroserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroserviceService]
    });
  });

  it('should ...', inject([HeroserviceService], (service: HeroserviceService) => {
    expect(service).toBeTruthy();
  }));
});
