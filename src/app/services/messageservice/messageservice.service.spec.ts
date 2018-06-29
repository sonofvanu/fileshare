/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MessageserviceService } from './messageservice.service';

describe('MessageserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MessageserviceService]
    });
  });

  it('should ...', inject([MessageserviceService], (service: MessageserviceService) => {
    expect(service).toBeTruthy();
  }));
});
