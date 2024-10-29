import { TestBed } from '@angular/core/testing';

import { InstanceSimulatorApiService } from './instance-simulator-api.service';
import { ModelSimulatorConfig } from '../../../internal/src/model/model-simulator-config';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstanceSimulatorApiService', () => {
  let service: InstanceSimulatorApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [InstanceSimulatorApiService, ModelSimulatorConfig],
    });
    service = TestBed.inject(InstanceSimulatorApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
