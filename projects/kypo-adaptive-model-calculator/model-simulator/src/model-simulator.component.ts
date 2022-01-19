import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractPhaseTypeEnum, DecisionMatrixRow, Phase, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-statistics';

@Component({
  selector: 'kypo-adaptive-model-simulator',
  templateUrl: './model-simulator.component.html',
  styleUrls: ['./model-simulator.component.css'],
})
export class ModelSimulatorComponent implements OnInit, OnChanges {
  @Input() inspectedPhase: Phase | TrainingPhase;
  @Input() phases: Phase[];

  pathGenerateEnabled: boolean;
  relatedTrainingPhases: TrainingPhase[];
  traineePerformance: TraineePhasePerformance[];

  ngOnInit(): void {
    this.relatedTrainingPhases = this.phases.filter(
      (phase) => phase.type === AbstractPhaseTypeEnum.Training
    ) as TrainingPhase[];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('inspectedPhase' in changes) {
      if (this.inspectedPhase.type === AbstractPhaseTypeEnum.Training) {
        this.inspectedPhase = this.inspectedPhase as TrainingPhase;
      }
    }

    if ('phases' in changes) {
      this.relatedTrainingPhases = this.phases.filter(
        (phase) => phase.type === AbstractPhaseTypeEnum.Training
      ) as TrainingPhase[];
    }
  }

  updateTransition(traineePerformance: TraineePhasePerformance[]): void {
    console.log(traineePerformance);
    // simulation of how many commands were entered, elapsed time, etc. -- replace decision matrix with separate object
    this.traineePerformance = traineePerformance;
  }

  generate(status: boolean): void {
    this.pathGenerateEnabled = status;
    if (status) {
      this.computeTraineePath(this.inspectedPhase as TrainingPhase, this.traineePerformance);
    }
  }

  private computeTraineePath(phase: TrainingPhase, performanceMatrix: TraineePhasePerformance[]) {}
}
