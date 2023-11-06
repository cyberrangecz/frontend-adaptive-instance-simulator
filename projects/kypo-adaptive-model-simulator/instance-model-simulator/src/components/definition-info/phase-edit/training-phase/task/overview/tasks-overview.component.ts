import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
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
export class TasksOverviewComponent extends SentinelBaseDirective implements OnInit, OnChanges {
  @Input() tasks: Task[];

  stepperTasks: PhaseStepperAdapter[];
  controls: SentinelControlItem[];
  activeStep: number;

  constructor(public dialog: MatDialog) {
    super();
  }

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('tasks' in changes && !changes['tasks'].isFirstChange()) {
      this.update();
    }
  }

  onActiveTaskChanged(index: number): void {
    this.activeStep = index;
  }

  private update(): void {
    this.activeStep = 0;
    this.stepperTasks = this.tasks.map((task) => new PhaseStepperAdapter(task));
  }
}
