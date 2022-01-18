import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, TrainingPhase } from '@muni-kypo-crp/training-model';

@Component({
  selector: 'kypo-adaptive-model-simulator',
  templateUrl: './model-simulator.component.html',
  styleUrls: ['./model-simulator.component.css'],
})
export class ModelSimulatorComponent implements OnChanges {
  @Input() phase: Phase;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if ('phase' in changes) {
      if (this.phase.type === AbstractPhaseTypeEnum.Training) {
        this.phase = this.phase as TrainingPhase;
      }
    }
  }
}
