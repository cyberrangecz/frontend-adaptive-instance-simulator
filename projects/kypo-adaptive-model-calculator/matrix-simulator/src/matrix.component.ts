import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormArray } from '@angular/forms';
import { MatrixFormGroup } from './matrix-form-group';
import { SentinelBaseDirective } from '@sentinel/common';
import { takeWhile } from 'rxjs';
import { DecisionMatrixRow, Phase, TrainingPhase } from '@muni-kypo-crp/training-model';

@Component({
  selector: 'kypo-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatrixComponent extends SentinelBaseDirective implements OnChanges {
  @Input() phase: TrainingPhase;
  @Output() matrixChange: EventEmitter<TrainingPhase> = new EventEmitter();

  matrixFormGroup: MatrixFormGroup;

  get decisionMatrixRows(): FormArray {
    return this.matrixFormGroup.formGroup.get('matrix') as FormArray;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('phase' in changes) {
      console.log(this.phase.decisionMatrix);
      this.matrixFormGroup = new MatrixFormGroup(this.phase.decisionMatrix);
      this.setFormsAsTouched();
      this.matrixFormGroup.formGroup.valueChanges.pipe(takeWhile(() => this.isAlive)).subscribe(() => {
        this.matrixFormGroup.setToMatrix(this.phase);
        this.matrixChange.emit(this.phase);
      });
    }
  }

  private setFormsAsTouched(): void {
    this.decisionMatrixRows.markAllAsTouched();
  }
}
