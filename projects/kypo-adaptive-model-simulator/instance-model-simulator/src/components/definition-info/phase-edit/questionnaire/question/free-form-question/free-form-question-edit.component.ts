import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { AdaptiveQuestion, QuestionnaireTypeEnum } from '@muni-kypo-crp/training-model';
import { SentinelBaseDirective } from '@sentinel/common';

@Component({
  selector: 'kypo-adaptive-free-form-question-edit',
  templateUrl: './free-form-question-edit.component.html',
  styleUrls: ['./free-form-question-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
/**
 * Component for editing a question of type Free Form
 */
export class FreeFormQuestionEditComponent extends SentinelBaseDirective {
  @Input() index: number;
  @Input() question: AdaptiveQuestion;
  @Input() questionnaireType: QuestionnaireTypeEnum;

  questionnaireTypes = QuestionnaireTypeEnum;
}
