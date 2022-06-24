import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformanceComponent } from './performance.component';
import { PerformanceFormGroup } from './performance-form-group';
import { TrainingPhase } from '@muni-kypo-crp/training-model';

describe('PerformanceComponent', () => {
  let component: PerformanceComponent;
  let fixture: ComponentFixture<PerformanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PerformanceComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerformanceComponent);
    component = fixture.componentInstance;
    const phase: TrainingPhase = new TrainingPhase();
    phase.decisionMatrix = [];
    component.performanceFormGroup = new PerformanceFormGroup(phase.decisionMatrix);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
