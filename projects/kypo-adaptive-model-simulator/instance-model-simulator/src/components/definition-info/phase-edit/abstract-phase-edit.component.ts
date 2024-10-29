import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, TrainingPhase } from '@muni-kypo-crp/training-model';

/**
 * Main component of phases edit. Resolves which component should be display based on phases type
 */
@Component({
  selector: 'kypo-simulator-phase-edit',
  templateUrl: './abstract-phase-edit.component.html',
  styleUrls: ['./abstract-phase-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AbstractPhaseEditComponent {
  @Input() phase: Phase;
  @Input() presentTrainingPhases: TrainingPhase[];
  @Output() phaseChange: EventEmitter<TrainingPhase> = new EventEmitter();
  @Output() isPhaseValid: EventEmitter<boolean> = new EventEmitter();
  phaseTypes = AbstractPhaseTypeEnum;

  onPhaseChange(phase: TrainingPhase): void {
    this.phaseChange.emit(phase);
  }

  onValidityChange(event: boolean): void {
    this.isPhaseValid.emit(event);
  }
}
