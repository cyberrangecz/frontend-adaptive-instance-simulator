import { Component, OnInit } from '@angular/core';
import { SentinelControlItem } from '@sentinel/components/controls';
import { InstanceSimulatorService } from './service/instance-simulator.service';
import { InstanceModelSimulatorControls } from './model/instance-model-simulator-controls';
import { take } from 'rxjs';

@Component({
  selector: 'kypo-instance-model-simulator',
  templateUrl: './instance-model-simulator.component.html',
  styleUrls: ['./instance-model-simulator.component.css'],
})
export class InstanceModelSimulatorComponent implements OnInit {
  controls: SentinelControlItem[] = [];
  data = [];

  constructor(private instanceSimulatorService: InstanceSimulatorService) {}

  ngOnInit(): void {
    this.controls = InstanceModelSimulatorControls.create(this.instanceSimulatorService);
  }

  /**
   * Resolves controls action and calls appropriate handler
   * @param control selected control emitted by controls component
   */
  onControlsAction(control: SentinelControlItem): void {
    control.result$.pipe(take(1)).subscribe();
  }
}
