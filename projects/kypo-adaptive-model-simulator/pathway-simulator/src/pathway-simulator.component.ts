import { Component, Input } from '@angular/core';
import { VisualizationData } from '@cyberrangecz-platform/adaptive-transition-visualization/model/visualization-data';

@Component({
  selector: 'kypo-pathway-simulator',
  templateUrl: './pathway-simulator.component.html',
  styleUrls: ['./pathway-simulator.component.css'],
})
export class PathwaySimulatorComponent {
  @Input() transitionData: VisualizationData;
}
