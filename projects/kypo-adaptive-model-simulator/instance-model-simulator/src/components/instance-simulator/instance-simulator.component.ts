import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdaptiveTrainingSankeyData } from '@muni-kypo-crp/adaptive-visualization';

@Component({
  selector: 'kypo-adaptive-model-simulator-instance-simulator',
  templateUrl: './instance-simulator.component.html',
  styleUrls: ['./instance-simulator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstanceSimulatorComponent {
  @Input() simulatorData: AdaptiveTrainingSankeyData;
}
