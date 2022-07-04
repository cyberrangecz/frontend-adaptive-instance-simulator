import {
  InfoPhaseTask,
  QuestionnairePhaseTask,
  Trainee,
  TrainingRunData,
  TrainingRunPathNode,
} from '@muni-kypo-crp/adaptive-transition-visualization';
import { Task, TrainingPhase } from '@muni-kypo-crp/training-model';

export class SimulatorMapper {
  static toCreatePathNode(task: Task, phase: TrainingPhase): TrainingRunPathNode {
    const pathNode = new TrainingRunPathNode();
    pathNode.phaseId = phase.id;
    pathNode.phaseOrder = phase.order;
    pathNode.taskId = task.id;
    pathNode.taskOrder = task.order;
    return pathNode;
  }

  /**
   * Creates default objects for transition visualization
   */

  static createTrainee(): TrainingRunData {
    const runData = new TrainingRunData();
    runData.trainee = new Trainee();
    runData.trainee.id = 1;
    runData.trainee.name = 'Trainee';
    runData.trainingRunId = 1;
    runData.trainingRunPathNodes = [];
    return runData;
  }

  static createInfoPhaseTask(): InfoPhaseTask {
    const infoTask = new InfoPhaseTask();
    infoTask.id = 0;
    infoTask.order = 0;
    infoTask.content = '';
    return infoTask;
  }

  static createQuestionnairePhaseTask(): QuestionnairePhaseTask {
    const questionnaireTask = new QuestionnairePhaseTask();
    questionnaireTask.order = 0;
    questionnaireTask.id = 0;
    questionnaireTask.questions = [];
    return questionnaireTask;
  }
}
