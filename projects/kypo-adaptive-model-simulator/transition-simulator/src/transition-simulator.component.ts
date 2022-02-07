import { Component, Input } from '@angular/core';
import { VisualizationData } from '@muni-kypo-crp/adaptive-transition-visualization/model/visualization-data';

@Component({
  selector: 'kypo-transition-simulator',
  templateUrl: './transition-simulator.component.html',
  styleUrls: ['./transition-simulator.component.css'],
})
export class TransitionSimulatorComponent {
  @Input() transitionData: VisualizationData;
  @Input() generate: boolean;
}
