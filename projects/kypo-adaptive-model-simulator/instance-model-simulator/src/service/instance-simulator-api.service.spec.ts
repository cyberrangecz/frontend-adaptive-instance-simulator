import { TestBed } from '@angular/core/testing';

import { InstanceSimulatorApiService } from './instance-simulator-api.service';
import { HttpClient } from '@angular/common/http';
import { ModelSimulatorConfig } from '../../../internal/src/model/model-simulator-config';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('InstanceSimulatorApiService', () => {
  let service: InstanceSimulatorApiService;
  // let config: jasmine.SpyObj<ModelSimulatorConfig>;

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
