import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-statistics';
import { TransitionPhase, VisualizationData } from '@muni-kypo-crp/adaptive-transition-visualization';
import { ModelSimulatorService } from './service/model-simulator.service';

@Component({
  selector: 'kypo-adaptive-model-simulator',
  templateUrl: './model-simulator.component.html',
  styleUrls: ['./model-simulator.component.css'],
})
export class ModelSimulatorComponent implements OnInit, OnChanges {
  @Input() inspectedPhase: Phase | TrainingPhase;
  @Input() phases: Phase[];

  relatedTrainingPhases: TrainingPhase[];
  traineesSimulatedPath: VisualizationData;
  traineePerformance: TraineePhasePerformance[];

  constructor(private modelSimulatorService: ModelSimulatorService) {}

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
      this.fetchData();
      this.relatedTrainingPhases = this.phases.filter(
        (phase) => phase.type === AbstractPhaseTypeEnum.Training
      ) as TrainingPhase[];
    }
  }

  updateTransition(traineePerformance: TraineePhasePerformance[]): void {
    this.traineePerformance = traineePerformance;
  }

  generate(): void {
    this.computeTraineePath(this.inspectedPhase as TrainingPhase, this.traineePerformance);
  }

  private computeTraineePath(inspectedPhase: TrainingPhase, performanceStatistics: TraineePhasePerformance[]) {
    this.traineesSimulatedPath.trainingRunsData = [];
    this.traineesSimulatedPath.phases.sort((a, b) => a.order - b.order);
    this.traineesSimulatedPath.phases = this.traineesSimulatedPath.phases.slice(0, inspectedPhase.order + 1);
    this.traineesSimulatedPath.trainingRunsData = this.modelSimulatorService.computeTraineePath(
      inspectedPhase,
      this.phases,
      this.relatedTrainingPhases,
      performanceStatistics
    );
  }

  private fetchData(): void {
    this.traineesSimulatedPath = new VisualizationData();
    this.traineesSimulatedPath.trainingRunsData = [];
    this.traineesSimulatedPath.phases = [];
    this.traineesSimulatedPath.phases = this.phases as unknown as TransitionPhase[];
  }
}
