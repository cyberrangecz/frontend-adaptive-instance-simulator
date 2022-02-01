import { TestBed } from '@angular/core/testing';

import { InstanceSimulatorApiService } from './instance-simulator-api.service';

describe('InstanceSimulatorApiService', () => {
  let service: InstanceSimulatorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstanceSimulatorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
