import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kypo-adaptive-model-simulator-instance-simulator',
  templateUrl: './instance-simulator.component.html',
  styleUrls: ['./instance-simulator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstanceSimulatorComponent implements OnInit {
  @Input() simulatorData: any;

  constructor() {}

  ngOnInit(): void {}
}
