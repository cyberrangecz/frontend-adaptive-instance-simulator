import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AdaptiveTrainingSankeyData } from '@cyberrangecz-platform/adaptive-visualization';

@Component({
  selector: 'kypo-adaptive-model-simulator-instance-simulator',
  templateUrl: './instance-simulator.component.html',
  styleUrls: ['./instance-simulator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstanceSimulatorComponent implements OnChanges {
  @Input() simulatorData: AdaptiveTrainingSankeyData;

  ngOnChanges(changes: SimpleChanges): void {
    if ('simulatorData' in changes && !changes['simulatorData'].isFirstChange()) {
      this.simulatorData = { ...this.simulatorData };
    }
  }
}
