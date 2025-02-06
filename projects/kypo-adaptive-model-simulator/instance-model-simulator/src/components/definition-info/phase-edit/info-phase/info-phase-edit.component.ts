import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { InfoPhase } from '@cyberrangecz-platform/training-model';

/**
 * Component for view of existing Info Phase
 */
@Component({
  selector: 'kypo-info-phase-configuration',
  templateUrl: './info-phase-edit.component.html',
  styleUrls: ['./info-phase-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoPhaseEditComponent {
  @Input() phase: InfoPhase;
}
