import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DecisionMatrixRow, TrainingPhase } from '@muni-kypo-crp/training-model';
import { TraineePhasePerformance } from './model/trainee-phase-performance';

export class PerformanceFormGroup {
  formGroup: FormGroup;

  constructor(decisionMatrix: DecisionMatrixRow[]) {
    this.formGroup = new FormGroup({
      performanceMatrix: new FormArray(decisionMatrix.map((row) => PerformanceFormGroup.createRows(row))),
    });
  }

  private static createRows(row: DecisionMatrixRow): FormGroup {
    return new FormGroup({
      questionnaireAnswered: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      completionTime: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      commandsEntered: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      solutionDisplayed: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      wrongAnswers: new FormControl(0, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      order: new FormControl(row.order, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
      id: new FormControl(row.id, [
        Validators.required,
        Validators.min(0),
        Validators.pattern('^([1-9][0-9]*)|([0])$'),
      ]),
    });
  }

  setToPerformanceMatrix(traineePerformance: TraineePhasePerformance[], relatedPhases: TrainingPhase[]): void {
    (this.formGroup.get('performanceMatrix') as FormArray).controls.forEach((phasePerformance, index) => {
      traineePerformance[index].wrongAnswers = phasePerformance.get('wrongAnswers').value;
      traineePerformance[index].solutionDisplayed = phasePerformance.get('solutionDisplayed').value;
      traineePerformance[index].keywordsInCommands = phasePerformance.get('commandsEntered').value; // this changes to keywords in commands?
      traineePerformance[index].phaseTime = phasePerformance.get('completionTime').value;
      traineePerformance[index].questionnaireAnswered = phasePerformance.get('questionnaireAnswered').value;
      traineePerformance[index].phaseId = relatedPhases[index].id;
      // what about total commands entered
    });
  }
}
