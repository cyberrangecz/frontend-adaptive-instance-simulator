import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DecisionMatrixRow, TrainingPhase } from '@muni-kypo-crp/training-model';

export class MatrixFormGroup {
  formGroup: FormGroup;

  constructor(decisionMatrix: DecisionMatrixRow[]) {
    this.formGroup = new FormGroup({
      matrix: new FormArray(decisionMatrix.map((row) => MatrixFormGroup.createRows(row))),
    });
  }

  private static createRows(row: DecisionMatrixRow): FormGroup {
    return new FormGroup({
      questionnaireAnswered: new FormControl(row.questionnaireAnswered, [Validators.required, Validators.min(0)]),
      completedInTime: new FormControl(row.completedInTime, [Validators.required, Validators.min(0)]),
      keywordUsed: new FormControl(row.keywordUsed, [Validators.required, Validators.min(0)]),
      solutionDisplayed: new FormControl(row.solutionDisplayed, [Validators.required, Validators.min(0)]),
      wrongAnswers: new FormControl(row.wrongAnswers, [Validators.required, Validators.min(0)]),
      order: new FormControl(row.order, [Validators.required, Validators.min(0)]),
      id: new FormControl(row.id, [Validators.required, Validators.min(0)]),
    });
  }

  setToMatrix(phase: TrainingPhase): void {
    phase.decisionMatrix = this.formGroup.get('decisionMatrix')?.value;
  }
}
