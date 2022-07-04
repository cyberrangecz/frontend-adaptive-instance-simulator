import { Injectable } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, Task, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from '../model/trainee-phase-statistics';
import {
  InfoPhase,
  QuestionnairePhase,
  TrainingRunData,
  TrainingRunPathNode,
} from '@muni-kypo-crp/adaptive-transition-visualization';
import { SimulatorMapper } from '../mappers/simulator.mapper';

@Injectable()
export class ModelSimulatorService {
  computeTraineePath(
    inspectedPhase: TrainingPhase,
    phases: Phase[],
    relatedTrainingPhases: TrainingPhase[],
    performanceStatistics: TraineePhasePerformance[]
  ): TrainingRunData[] {
    const runData = SimulatorMapper.createTrainee();

    phases.forEach((phase) => {
      let pathNode = new TrainingRunPathNode();
      if (phase.type === AbstractPhaseTypeEnum.Training) {
        // out of bound possibility
        const task = this.computeSuitableTask(phase as TrainingPhase, relatedTrainingPhases, performanceStatistics);
        pathNode = SimulatorMapper.toCreatePathNode(task, phase as TrainingPhase);
      } else {
        pathNode.phaseId = phase.id;
        pathNode.phaseOrder = phase.order;
        pathNode.taskId = 0;
        pathNode.taskOrder = 0;
        if (phase.type === AbstractPhaseTypeEnum.Info) {
          (phase as unknown as InfoPhase).tasks = [SimulatorMapper.createInfoPhaseTask()];
        } else if (phase.type === AbstractPhaseTypeEnum.Questionnaire) {
          (phase as unknown as QuestionnairePhase).tasks = [SimulatorMapper.createQuestionnairePhaseTask()];
        }
      }
      runData.trainingRunPathNodes.push(pathNode);

      if (phase.id === inspectedPhase.id) {
        return;
      }
    });
    runData.trainingRunPathNodes = runData.trainingRunPathNodes.slice(0, inspectedPhase.order + 1);
    return [runData];
  }

  /**
   * Pick suitable task from inspected phase-edit based on trainees' performance and decision matrix weights
   * @param inspectedPhase phase-edit from which the task will be selected
   * @param relatedTrainingPhases phases related to current training phase-edit
   * @param performanceStatisticsMatrix simulation of trainees' performance
   * @return id of suitable task
   */
  private computeSuitableTask(
    inspectedPhase: TrainingPhase,
    relatedTrainingPhases: TrainingPhase[],
    performanceStatisticsMatrix: TraineePhasePerformance[]
  ): Task {
    const participantPerformance = this.evaluateParticipantPerformance(
      inspectedPhase,
      relatedTrainingPhases,
      performanceStatisticsMatrix
    );
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
   * Evaluate trainee performance for given phase-edit with given trainees' performance
   * @param inspectedPhase phase-edit for which the trainee performance data are inspected
   * @param relatedTrainingPhases phases related to current training phase-edit
   * @param performanceStatisticsMatrix trainees' performance
   * @return evaluated participant performance
   */
  private evaluateParticipantPerformance(
    inspectedPhase: TrainingPhase,
    relatedTrainingPhases: TrainingPhase[],
    performanceStatisticsMatrix: TraineePhasePerformance[]
  ): number {
    let sumOfAllWeights = 0;
    let participantWeightedPerformance = 0;
    let index = 0;
    for (const decisionMatrixRow of inspectedPhase.decisionMatrix) {
      const relatedPhase = relatedTrainingPhases[index];
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
