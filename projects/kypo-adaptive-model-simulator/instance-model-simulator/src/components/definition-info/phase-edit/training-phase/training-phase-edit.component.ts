import { SentinelBaseDirective } from '@sentinel/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { TrainingPhaseEditFormGroup } from './training-phase-edit-form-group';
import { takeWhile } from 'rxjs/operators';
import { AbstractControl, UntypedFormArray } from '@angular/forms';
import { TrainingPhase } from '@muni-kypo-crp/training-model';

@Component({
  selector: 'kypo-training-phase-configuration',
  templateUrl: './training-phase-edit.component.html',
  styleUrls: ['./training-phase-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingPhaseEditComponent extends SentinelBaseDirective implements OnChanges {
  @Input() phase: TrainingPhase;
  @Input() presentTrainingPhases: TrainingPhase[];
  @Output() phaseChange: EventEmitter<TrainingPhase> = new EventEmitter();
  @Output() isMatrixValid: EventEmitter<boolean> = new EventEmitter();

  phaseConfigFormGroup: TrainingPhaseEditFormGroup;

  get title(): AbstractControl {
    return this.phaseConfigFormGroup.formGroup.get('title');
  }

  get decisionMatrixRows(): UntypedFormArray {
    return this.phaseConfigFormGroup.formGroup.get('decisionMatrix') as UntypedFormArray;
  }

  get allowedWrongAnswers(): AbstractControl {
    return this.phaseConfigFormGroup.formGroup.get('allowedWrongAnswers');
  }

  get allowedCommands(): AbstractControl {
    return this.phaseConfigFormGroup.formGroup.get('allowedCommands');
  }

  get estimatedDuration(): AbstractControl {
    return this.phaseConfigFormGroup.formGroup.get('estimatedDuration');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('phase' in changes || 'updateMatrixFlag' in changes) {
      this.phaseConfigFormGroup = new TrainingPhaseEditFormGroup(this.phase);
      this.setFormsAsTouched();
      this.phaseConfigFormGroup.formGroup.valueChanges.pipe(takeWhile(() => this.isAlive)).subscribe(() => {
        this.phaseConfigFormGroup.setToPhase(this.phase);
        this.isMatrixValid.emit(this.phaseConfigFormGroup.formGroup.valid);
        this.phaseChange.emit(this.phase);
      });
    }
  }

  private setFormsAsTouched(): void {
    this.title.markAsTouched();
    this.allowedWrongAnswers.markAsTouched();
    this.allowedCommands.markAsTouched();
    this.estimatedDuration.markAsTouched();
    this.decisionMatrixRows.markAllAsTouched();
  }
}
