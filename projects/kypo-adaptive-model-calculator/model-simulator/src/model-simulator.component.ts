import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, Task, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-statistics';
import {
  InfoPhase,
  InfoPhaseTask,
  QuestionnairePhase,
  QuestionnairePhaseTask,
  Trainee,
  TrainingRunData,
  TrainingRunPathNode,
  TransitionPhase,
  VisualizationData,
} from '@muni-kypo-crp/adaptive-transition-visualization';

@Component({
  selector: 'kypo-adaptive-model-simulator',
  templateUrl: './model-simulator.component.html',
  styleUrls: ['./model-simulator.component.css'],
})
export class ModelSimulatorComponent implements OnInit, OnChanges {
  @Input() inspectedPhase: Phase | TrainingPhase;
  @Input() phases: Phase[];

  pathGenerationEnabled: boolean;
  relatedTrainingPhases: TrainingPhase[];
  traineesSimulatedPath: VisualizationData;
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
      this.traineesSimulatedPath = new VisualizationData();
      this.traineesSimulatedPath.phases = [];
      this.traineesSimulatedPath.phases = this.phases as unknown as TransitionPhase[];
      this.relatedTrainingPhases = this.phases.filter(
        (phase) => phase.type === AbstractPhaseTypeEnum.Training
      ) as TrainingPhase[];
    }
  }

  updateTransition(traineePerformance: TraineePhasePerformance[]): void {
    // simulation of how many commands were entered, elapsed time, etc. -- replace decision matrix with separate object
    this.traineePerformance = traineePerformance;
  }

  generate(status: boolean): void {
    this.pathGenerationEnabled = status;
    if (status) {
      this.computeTraineePath(this.inspectedPhase as TrainingPhase, this.traineePerformance);
    }
  }

  private computeTraineePath(inspectedPhase: TrainingPhase, performanceStatistics: TraineePhasePerformance[]) {
    const runData = new TrainingRunData();
    runData.trainee = new Trainee();
    runData.trainee.id = 1;
    runData.trainee.name = 'Trainee';
    runData.trainingRunId = 1;
    runData.trainingRunPathNodes = [];
    this.traineesSimulatedPath.trainingRunsData = [];
    this.traineesSimulatedPath.phases.sort((a, b) => a.order - b.order);

    this.phases.forEach((phase, index) => {
      let pathNode = new TrainingRunPathNode();
      let trainingPhaseIndex = 0;

      if (phase.type === AbstractPhaseTypeEnum.Training) {
        trainingPhaseIndex++;
        const task = this.computeSuitableTask(
          phase as TrainingPhase,
          performanceStatistics.slice(0, trainingPhaseIndex)
        ); // out of bound possibility
        pathNode.phaseId = phase.id;
        pathNode.phaseOrder = phase.order;
        pathNode.taskId = task.id;
        pathNode.taskOrder = task.order;
      } else {
        pathNode.phaseId = phase.id;
        pathNode.phaseOrder = phase.order;
        pathNode.taskId = 0;
        pathNode.taskOrder = 0;
        if (phase.type === AbstractPhaseTypeEnum.Info) {
          const infoTask = new InfoPhaseTask();
          infoTask.id = 0;
          infoTask.order = 0;
          infoTask.content = '';
          (phase as unknown as InfoPhase).tasks = [infoTask];
        } else if (phase.type === AbstractPhaseTypeEnum.Questionnaire) {
          const questionnaireTask = new QuestionnairePhaseTask();
          questionnaireTask.order = 0;
          questionnaireTask.id = 0;
          questionnaireTask.questions = [];
          (phase as unknown as QuestionnairePhase).tasks = [questionnaireTask];
        }
      }
      runData.trainingRunPathNodes.push(pathNode);

      if (phase.id === inspectedPhase.id) {
        return;
      }
    });

    this.traineesSimulatedPath.phases = this.traineesSimulatedPath.phases.slice(0, inspectedPhase.order + 1);
    this.traineesSimulatedPath.trainingRunsData.push(runData);
    this.traineesSimulatedPath.trainingRunsData[0].trainingRunPathNodes =
      this.traineesSimulatedPath.trainingRunsData[0].trainingRunPathNodes.slice(0, inspectedPhase.order + 1);
  }

  /**
   * Pick suitable task from inspected phase based on trainees' performance and decision matrix weights
   * @param inspectedPhase phase from which the task will be selected
   * @param performanceStatisticsMatrix simulation of trainees' performance
   * @return id of suitable task
   */
  private computeSuitableTask(
    inspectedPhase: TrainingPhase,
    performanceStatisticsMatrix: TraineePhasePerformance[]
  ): Task {
    const participantPerformance = this.evaluateParticipantPerformance(inspectedPhase, performanceStatisticsMatrix);
    if (participantPerformance == 0) {
      return inspectedPhase.tasks[inspectedPhase.tasks.length - 1];
    } else {
      const suitableTask = inspectedPhase.tasks.length * (1 - participantPerformance) + 1;
      return inspectedPhase.tasks[suitableTask];
    }
  }

  /**
   * Evaluate trainee performance for given phase with given trainees' performance
   * @param inspectedPhase phase for which the trainee performance data are inspected
   * @param performanceStatisticsMatrix trainees' performance
   * @return evaluated participant performance
   */
  private evaluateParticipantPerformance(
    inspectedPhase: TrainingPhase,
    performanceStatisticsMatrix: TraineePhasePerformance[]
  ): number {
    let sumOfAllWeights = 0;
    let participantWeightedPerformance = 0;
    performanceStatisticsMatrix.forEach((row, index) => {
      sumOfAllWeights += inspectedPhase.decisionMatrix[index].questionnaireAnswered;
      participantWeightedPerformance +=
        inspectedPhase.decisionMatrix[index].questionnaireAnswered * (row.questionnaireAnswered ? 1 : 0);
      if (!row.solutionDisplayed) {
        participantWeightedPerformance +=
          inspectedPhase.decisionMatrix[index].solutionDisplayed * (row.solutionDisplayed ? 1 : 0);
        participantWeightedPerformance +=
          inspectedPhase.decisionMatrix[index].keywordUsed *
          (row.numberOfCommands < inspectedPhase.allowedCommands ? 1 : 0);
        participantWeightedPerformance +=
          inspectedPhase.decisionMatrix[index].completedInTime *
          (row.phaseTime * 60000 < inspectedPhase.estimatedDuration * 60000 ? 1 : 0); // check if inspected phase does not already have time in millis
        participantWeightedPerformance +=
          inspectedPhase.decisionMatrix[index].wrongAnswers *
          (row.wrongAnswers < inspectedPhase.allowedWrongAnswers ? 1 : 0);
      }
      sumOfAllWeights +=
        inspectedPhase.decisionMatrix[index].completedInTime +
        inspectedPhase.decisionMatrix[index].solutionDisplayed +
        inspectedPhase.decisionMatrix[index].keywordUsed +
        inspectedPhase.decisionMatrix[index].wrongAnswers;
    });

    if (sumOfAllWeights === 0) {
      return 0;
    }
    return participantWeightedPerformance / sumOfAllWeights;
  }
}
