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
    this.traineePerformance = traineePerformance;
  }

  generate(status: boolean): void {
    this.pathGenerationEnabled = status;
    if (status) {
      this.computeTraineePath(this.inspectedPhase as TrainingPhase, this.traineePerformance);
    }
  }

  reset() {
    this.traineesSimulatedPath = null;
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
    this.phases.forEach((phase) => {
      const pathNode = new TrainingRunPathNode();

      if (phase.type === AbstractPhaseTypeEnum.Training) {
        const task = this.computeSuitableTask(phase as TrainingPhase, performanceStatistics); // out of bound possibility
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
      // ask for + 1 and 0.3333333
      // console.log(Number((1 - participantPerformance).toFixed(8)) * inspectedPhase.tasks.length)
      const suitableTask = Math.trunc(Number((1 - participantPerformance).toFixed(8)) * inspectedPhase.tasks.length);

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
    let index = 0;
    for (const decisionMatrixRow of inspectedPhase.decisionMatrix) {
      const relatedPhase = this.relatedTrainingPhases[index];
      sumOfAllWeights += decisionMatrixRow.questionnaireAnswered;
      participantWeightedPerformance +=
        decisionMatrixRow.questionnaireAnswered *
        Number(performanceStatisticsMatrix.find((row) => row.phaseId === relatedPhase.id).questionnaireAnswered);
      if (relatedPhase.id === inspectedPhase.id) {
        break;
      }
      if (
        !(
          decisionMatrixRow.completedInTime > 0 ||
          decisionMatrixRow.keywordUsed > 0 ||
          decisionMatrixRow.solutionDisplayed > 0 ||
          decisionMatrixRow.wrongAnswers > 0
        )
      ) {
        index += 1;
        continue;
      }
      const relatedPhaseStatistics = performanceStatisticsMatrix.find((row) => row.phaseId === inspectedPhase.id);
      if (!relatedPhaseStatistics.solutionDisplayed) {
        participantWeightedPerformance +=
          decisionMatrixRow.solutionDisplayed * Number(relatedPhaseStatistics.solutionDisplayed);
        participantWeightedPerformance +=
          decisionMatrixRow.keywordUsed *
          Number(relatedPhaseStatistics.numberOfCommands < relatedPhase.allowedCommands);
        participantWeightedPerformance +=
          decisionMatrixRow.completedInTime * Number(relatedPhaseStatistics.phaseTime < relatedPhase.estimatedDuration);
        participantWeightedPerformance +=
          decisionMatrixRow.wrongAnswers *
          Number(relatedPhaseStatistics.wrongAnswers < relatedPhase.allowedWrongAnswers);
      }
      sumOfAllWeights +=
        decisionMatrixRow.completedInTime +
        decisionMatrixRow.solutionDisplayed +
        decisionMatrixRow.keywordUsed +
        decisionMatrixRow.wrongAnswers;
      index += 1;
    }
    if (sumOfAllWeights === 0) {
      return 0;
    }
    return participantWeightedPerformance / sumOfAllWeights;
  }
}
