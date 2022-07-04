import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceSimulatorPageComponent } from './instance-simulator-page.component';
import { InstanceSimulatorService } from '../../../../../kypo-adaptive-model-simulator/instance-model-simulator/src/service/instance-simulator.service';
import {
  createInstanceSimulatorApiServiceSpy,
  createInstanceSimulatorServiceSpy,
} from '../../../../../kypo-adaptive-model-simulator/internal/src/testing/testing-commons.spec';
import { InstanceSimulatorApiService } from '../../../../../kypo-adaptive-model-simulator/instance-model-simulator/src/service/instance-simulator-api.service';
import { SentinelAuthService } from '@sentinel/auth';

describe('InstanceSimulatorPageComponent', () => {
  let component: InstanceSimulatorPageComponent;
  let fixture: ComponentFixture<InstanceSimulatorPageComponent>;
  let instanceSimulatorServiceSpy: jasmine.SpyObj<InstanceSimulatorService>;
  let instanceSimulatorApiServiceSpy: jasmine.SpyObj<InstanceSimulatorApiService>;

  beforeEach(async () => {
    instanceSimulatorServiceSpy = createInstanceSimulatorServiceSpy();
    instanceSimulatorApiServiceSpy = createInstanceSimulatorApiServiceSpy();
    await TestBed.configureTestingModule({
      declarations: [InstanceSimulatorPageComponent],
      providers: [
        { provide: InstanceSimulatorService, useValue: instanceSimulatorServiceSpy },
        { provide: InstanceSimulatorApiService, useValue: instanceSimulatorApiServiceSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceSimulatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
