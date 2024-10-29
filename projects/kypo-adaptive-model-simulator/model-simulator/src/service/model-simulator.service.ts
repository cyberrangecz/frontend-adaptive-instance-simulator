import { Injectable } from '@angular/core';
import { AbstractPhaseTypeEnum, Phase, Task, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from '../model/trainee-phase-statistics';
import { TrainingRunData } from '@muni-kypo-crp/adaptive-transition-visualization';
import { SimulatorMapper } from '../mappers/simulator.mapper';

@Injectable()
export class ModelSimulatorService {
  computeTraineePath(
    phases: Phase[],
    relatedTrainingPhases: TrainingPhase[],
    performanceStatistics: TraineePhasePerformance[],
  ): TrainingRunData[] {
    const runData = SimulatorMapper.createTrainee();
    const maxOrder = phases.length - 1;

    // process all non training phases before first training phase
    phases
      .filter((phase) => phase.type !== AbstractPhaseTypeEnum.Training)
      .forEach((phase) => {
        runData.trainingRunPathNodes.push(SimulatorMapper.createNonTrainingPathNode(phase));
      });

    // process first training phase
    const firstTrainingPhase = phases.find((phase) => phase.type === AbstractPhaseTypeEnum.Training) as TrainingPhase;
    const task = this.computeSuitableTask(firstTrainingPhase, relatedTrainingPhases, performanceStatistics);
    runData.trainingRunPathNodes.push(SimulatorMapper.toCreatePathNode(task, firstTrainingPhase));

    // process remaining training phases
    phases
      .filter((phase) => phase.type === AbstractPhaseTypeEnum.Training)
      .forEach((phase) => {
        if (phase.order === maxOrder) {
          return;
        }
        const nextPhase = phases[phase.order + 1];
        if (nextPhase.type === AbstractPhaseTypeEnum.Training) {
          const task = this.computeSuitableTask(
            nextPhase as TrainingPhase,
            relatedTrainingPhases,
            performanceStatistics,
          );
          runData.trainingRunPathNodes.push(SimulatorMapper.toCreatePathNode(task, nextPhase as TrainingPhase));
        }
      });

    runData.trainingRunPathNodes.sort((a, b) => a.phaseOrder - b.phaseOrder);
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
    performanceStatisticsMatrix: TraineePhasePerformance[],
  ): Task {
    const participantPerformance = this.evaluateParticipantPerformance(
      inspectedPhase,
      relatedTrainingPhases,
      performanceStatisticsMatrix,
    );
    /**
     * This computation is equal to the third equation in the paper: https://www.muni.cz/en/research/publications/1783806
     * it is not adding one to the suitableTask constant result as it used as index to array to pick the suitable task.
     * Therefore, for the suitable task 1, the first task with index 0 is picked from the tasks array.
     */
    if (participantPerformance == 0) {
      return inspectedPhase.tasks[inspectedPhase.tasks.length - 1];
    } else {
      // ask for + 1 and 0.3333333
      const suitableTask = Math.trunc(inspectedPhase.tasks.length * Number((1 - participantPerformance).toFixed(8)));
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
    performanceStatisticsMatrix: TraineePhasePerformance[],
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
      const relatedPhaseStatistics = performanceStatisticsMatrix.find((row) => row.phaseId === relatedPhase.id);
      if (!relatedPhaseStatistics.solutionDisplayed) {
        participantWeightedPerformance +=
          decisionMatrixRow.solutionDisplayed * Number(!relatedPhaseStatistics.solutionDisplayed);
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
