import { TestBed } from '@angular/core/testing';

import { ModelSimulatorService } from './model-simulator.service';

describe('ModelSimulatorService', () => {
  let service: ModelSimulatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ModelSimulatorService],
    });
    service = TestBed.inject(ModelSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
