import { TestBed } from '@angular/core/testing';

import { ManagerserviceService } from './managerservice.service';

describe('ManagerserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManagerserviceService = TestBed.get(ManagerserviceService);
    expect(service).toBeTruthy();
  });
});
