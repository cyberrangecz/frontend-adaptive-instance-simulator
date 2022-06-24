import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSimulatorComponent } from './model-simulator.component';
import { ModelSimulatorService } from './service/model-simulator.service';
import { createModelSimulatorServiceSpy } from '../../internal/src/testing/testing-commons.spec';
import { Phase } from '@muni-kypo-crp/training-model';

describe('ModelSimulatorComponent', () => {
  let component: ModelSimulatorComponent;
  let fixture: ComponentFixture<ModelSimulatorComponent>;
  let modelSimulatorServiceSpy: jasmine.SpyObj<ModelSimulatorService>;

  beforeEach(async () => {
    modelSimulatorServiceSpy = createModelSimulatorServiceSpy();
    await TestBed.configureTestingModule({
      declarations: [ModelSimulatorComponent],
      providers: [{ provide: ModelSimulatorService, useValue: modelSimulatorServiceSpy }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSimulatorComponent);
    component = fixture.componentInstance;
    component.phases = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
