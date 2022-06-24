import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceModelSimulatorComponent } from './instance-model-simulator.component';
import { createInstanceSimulatorServiceSpy } from '../../internal/src/testing/testing-commons.spec';
import { InstanceSimulatorService } from './service/instance-simulator.service';
import { EMPTY, Observable, of } from 'rxjs';

describe('InstanceModelSimulatorComponent', () => {
  let component: InstanceModelSimulatorComponent;
  let fixture: ComponentFixture<InstanceModelSimulatorComponent>;
  let instanceSimulatorServiceSpy: jasmine.SpyObj<InstanceSimulatorService>;

  beforeEach(async () => {
    instanceSimulatorServiceSpy = createInstanceSimulatorServiceSpy();

    await TestBed.configureTestingModule({
      declarations: [InstanceModelSimulatorComponent],
      providers: [{ provide: InstanceSimulatorService, useValue: instanceSimulatorServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceModelSimulatorComponent);
    component = fixture.componentInstance;
    instanceSimulatorServiceSpy.state$ = of(null);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
