import { TestBed } from '@angular/core/testing';

import { SWorkService } from './s-work.service';

describe('SWorkService', () => {
  let service: SWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
