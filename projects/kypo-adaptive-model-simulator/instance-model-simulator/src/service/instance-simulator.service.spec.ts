import { TestBed } from '@angular/core/testing';

import { InstanceSimulatorService } from './instance-simulator.service';

describe('InstanceSimulatorService', () => {
  let service: InstanceSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstanceSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
