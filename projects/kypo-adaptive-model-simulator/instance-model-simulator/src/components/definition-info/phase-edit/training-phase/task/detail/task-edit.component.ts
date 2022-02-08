import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SentinelBaseDirective } from '@sentinel/common';
import { Task } from '@muni-kypo-crp/training-model';

@Component({
  selector: 'kypo-task-configuration',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskEditComponent extends SentinelBaseDirective {
  @Input() task: Task;
}
