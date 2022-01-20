import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from '@angular/core';
import { VisualizationData } from '@muni-kypo-crp/adaptive-transition-visualization/model/visualization-data';

@Component({
  selector: 'kypo-transition-simulator',
  templateUrl: './transition-simulator.component.html',
  styleUrls: ['./transition-simulator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransitionSimulatorComponent implements OnInit {
  @Input() transitionData: VisualizationData;
  @Input() generate: boolean;

  constructor() {}

  ngOnInit(): void {}
}
