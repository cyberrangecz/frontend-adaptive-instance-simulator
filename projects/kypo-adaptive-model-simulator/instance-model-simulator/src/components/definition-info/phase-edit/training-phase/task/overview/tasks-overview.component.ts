import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SentinelBaseDirective } from '@sentinel/common';
import { SentinelControlItem } from '@sentinel/components/controls';
import { Task } from '@muni-kypo-crp/training-model';
import { PhaseStepperAdapter } from '../../../../../../model/adapters/phase-stepper-adapter';

/**
 * Main hint edit component. Contains stepper to navigate through existing hints and controls to create new hints
 */
@Component({
  selector: 'kypo-tasks-overview',
  templateUrl: './tasks-overview.component.html',
  styleUrls: ['./tasks-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
})
export class TasksOverviewComponent extends SentinelBaseDirective implements OnInit {
  @Input() tasks: Task[];

  stepperTasks: PhaseStepperAdapter[];
  controls: SentinelControlItem[];
  activeStep: number;

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.activeStep = 0;
    this.stepperTasks = this.tasks.map((task) => new PhaseStepperAdapter(task));
  }

  onActiveTaskChanged(index: number): void {
    this.activeStep = index;
  }
}
