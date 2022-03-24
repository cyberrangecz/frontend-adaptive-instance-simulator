import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AdaptiveTrainingSankeyData } from '@muni-kypo-crp/adaptive-visualization';

@Component({
  selector: 'kypo-adaptive-model-simulator-instance-simulator',
  templateUrl: './instance-simulator.component.html',
  styleUrls: ['./instance-simulator.component.css'],
})
export class InstanceSimulatorComponent implements OnChanges {
  @Input() simulatorData: AdaptiveTrainingSankeyData;

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['simulatorData'].isFirstChange()) {
      this.simulatorData = { ...this.simulatorData };
    }
  }
}
