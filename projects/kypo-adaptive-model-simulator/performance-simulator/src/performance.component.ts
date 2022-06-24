import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UntypedFormArray } from '@angular/forms';
import { PerformanceFormGroup } from './performance-form-group';
import { SentinelBaseDirective } from '@sentinel/common';
import { takeWhile } from 'rxjs';
import { DecisionMatrixRow, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-performance';

@Component({
  selector: 'kypo-performance-simulator',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerformanceComponent extends SentinelBaseDirective implements OnChanges {
  @Input() phase: TrainingPhase;
  @Input() relatedPhases: TrainingPhase[];
  @Output() matrixChange: EventEmitter<TraineePhasePerformance[]> = new EventEmitter();
  @Output() startGenerate: EventEmitter<void> = new EventEmitter();

  performanceFormGroup: PerformanceFormGroup;
  traineePerformance: TraineePhasePerformance[] = [];

  get decisionMatrixRows(): UntypedFormArray {
    return this.performanceFormGroup.formGroup.get('performanceMatrix') as UntypedFormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('phase' in changes) {
      this.performanceFormGroup = new PerformanceFormGroup(this.phase.decisionMatrix);
      this.setFormsAsTouched();
      this.performanceFormGroup.formGroup.valueChanges.pipe(takeWhile(() => this.isAlive)).subscribe(() => {
        this.createPerformanceMatrix(this.phase.decisionMatrix);
        this.performanceFormGroup.setToPerformanceMatrix(this.traineePerformance, this.relatedPhases);
        this.matrixChange.emit(this.traineePerformance);
      });
    }
  }

  generate(): void {
    this.startGenerate.emit();
  }

  private createPerformanceMatrix(decisionMatrix: DecisionMatrixRow[]): TraineePhasePerformance[] {
    this.traineePerformance = [];
    decisionMatrix.forEach(() => {
      this.traineePerformance.push(new TraineePhasePerformance());
    });
    return this.traineePerformance;
  }

  private setFormsAsTouched(): void {
    this.decisionMatrixRows.markAllAsTouched();
  }
}
