import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { SentinelBaseDirective } from '@sentinel/common';
import { InfoPhase } from '@muni-kypo-crp/training-model';

/**
 * Component for view of existing Info Phase
 */
@Component({
  selector: 'kypo-info-phase-configuration',
  templateUrl: './info-phase-edit.component.html',
  styleUrls: ['./info-phase-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPhaseEditComponent extends SentinelBaseDirective {
  @Input() phase: InfoPhase;
  @Output() phaseChange: EventEmitter<InfoPhase> = new EventEmitter();
}
