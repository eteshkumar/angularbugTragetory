import { TestBed } from '@angular/core/testing';

import { TesterserviceService } from './testerservice.service';

describe('TesterserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TesterserviceService = TestBed.get(TesterserviceService);
    expect(service).toBeTruthy();
  });
});
