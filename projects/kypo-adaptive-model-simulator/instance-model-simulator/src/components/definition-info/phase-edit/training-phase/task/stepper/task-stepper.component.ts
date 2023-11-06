import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { SentinelBaseDirective } from '@sentinel/common';
import { SentinelStepper, StepStateEnum } from '@sentinel/components/stepper';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { PhaseStepperAdapter } from '../../../../../../model/adapters/phase-stepper-adapter';

@Component({
  selector: 'kypo-task-stepper',
  templateUrl: './task-stepper.component.html',
  styleUrls: ['./task-stepper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskStepperComponent extends SentinelBaseDirective implements OnChanges {
  @Input() tasks: PhaseStepperAdapter[];
  @Input() activeStep: number;
  @Output() activeStepChange: EventEmitter<number> = new EventEmitter();

  taskStepper: SentinelStepper<PhaseStepperAdapter> = { items: [] };
  private previousActiveStep = -1;

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('tasks' in changes) {
      this.taskStepper.items = this.tasks;
    }
    this.changeSelectedStep(this.activeStep);
  }

  activeStepChanged(activeStep: number): void {
    this.activeStepChange.emit(activeStep);
  }

  private changeSelectedStep(index: number) {
    if (this.previousActiveStep >= 0 && this.previousActiveStep < this.taskStepper.items.length) {
      this.taskStepper.items[this.previousActiveStep].state = StepStateEnum.SELECTABLE;
    }
    this.taskStepper.items[index].state = StepStateEnum.ACTIVE;
    this.previousActiveStep = this.activeStep;
  }
}
