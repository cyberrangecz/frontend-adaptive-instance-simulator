import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { QuestionTypeEnum } from '@muni-kypo-crp/training-model';
import { AdaptiveQuestion } from '@muni-kypo-crp/training-model/lib/phase/questionnaire-phase/adaptive-question';
import { SentinelBaseDirective } from '@sentinel/common';

@Component({
  selector: 'kypo-adaptive-question-edit',
  templateUrl: './question-edit.component.html',
  styleUrls: ['./question-edit.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuestionEditComponent extends SentinelBaseDirective {
  @Input() question: AdaptiveQuestion;
  @Input() questionnaireType: QuestionTypeEnum;
  @Input() index: number;

  questionTypes = QuestionTypeEnum;
}
