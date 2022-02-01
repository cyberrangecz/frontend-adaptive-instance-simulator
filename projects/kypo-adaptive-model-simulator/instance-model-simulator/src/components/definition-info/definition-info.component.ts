import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kypo-adaptive-model-simulator-definition-info',
  templateUrl: './definition-info.component.html',
  styleUrls: ['./definition-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefinitionInfoComponent implements OnInit {
  @Input() definitionInfo: any;
  phasesCount: number;

  constructor() {}

  ngOnInit(): void {}
}
