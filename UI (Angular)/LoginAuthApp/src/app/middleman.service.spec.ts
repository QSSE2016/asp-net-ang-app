import { TestBed } from '@angular/core/testing';

import { MiddlemanService } from './middleman.service';

describe('MiddlemanService', () => {
  let service: MiddlemanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiddlemanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
