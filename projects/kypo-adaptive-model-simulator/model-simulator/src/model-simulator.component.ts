import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, TrainingPhase } from '@cyberrangecz-platform/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-statistics';
import { TransitionPhase, VisualizationData } from '@cyberrangecz-platform/adaptive-transition-visualization';
import { ModelSimulatorService } from './service/model-simulator.service';

@Component({
  selector: 'kypo-adaptive-model-simulator',
  templateUrl: './model-simulator.component.html',
  styleUrls: ['./model-simulator.component.css'],
})
export class ModelSimulatorComponent implements OnInit, OnChanges {
  @Input() phases: Phase[];

  inspectedPhase: TrainingPhase;
  relatedTrainingPhases: TrainingPhase[];
  traineesSimulatedPath: VisualizationData;
  traineePerformance: TraineePhasePerformance[];

  constructor(private modelSimulatorService: ModelSimulatorService) {}

  ngOnInit(): void {
    this.relatedTrainingPhases = this.phases.filter(
      (phase) => phase.type === AbstractPhaseTypeEnum.Training,
    ) as TrainingPhase[];
    this.inspectedPhase = this.relatedTrainingPhases[this.relatedTrainingPhases.length - 1];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('phases' in changes) {
      this.prepareData();
      this.relatedTrainingPhases = this.phases.filter(
        (phase) => phase.type === AbstractPhaseTypeEnum.Training,
      ) as TrainingPhase[];
      this.inspectedPhase = this.relatedTrainingPhases[this.relatedTrainingPhases.length - 1];
    }
  }

  updateTransition(traineePerformance: TraineePhasePerformance[]): void {
    this.traineePerformance = traineePerformance;
  }

  generate(): void {
    this.computeTraineePath(this.traineePerformance);
  }

  private computeTraineePath(performanceStatistics: TraineePhasePerformance[]) {
    this.traineesSimulatedPath.trainingRunsData = [];
    this.traineesSimulatedPath.phases.sort((a, b) => a.order - b.order);
    this.traineesSimulatedPath.trainingRunsData = this.modelSimulatorService.computeTraineePath(
      this.phases,
      this.relatedTrainingPhases,
      performanceStatistics,
    );
  }

  private prepareData(): void {
    this.traineesSimulatedPath = new VisualizationData();
    this.traineesSimulatedPath.trainingRunsData = [];
    this.traineesSimulatedPath.phases = [];
    this.traineesSimulatedPath.phases = this.phases as unknown as TransitionPhase[];
  }
}
