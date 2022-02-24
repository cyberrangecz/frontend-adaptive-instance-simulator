import { Component, OnDestroy, OnInit } from '@angular/core';
import { SentinelControlItem } from '@sentinel/components/controls';
import { InstanceSimulatorService } from './service/instance-simulator.service';
import { InstanceModelSimulatorControls } from './model/instance-model-simulator-controls';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { InstanceModelSimulator } from './model/instance-model-simulator';
import { TrainingPhase } from '@muni-kypo-crp/training-model';

@Component({
  selector: 'kypo-instance-model-simulator',
  templateUrl: './instance-model-simulator.component.html',
  styleUrls: ['./instance-model-simulator.component.css'],
})
export class InstanceModelSimulatorComponent implements OnInit, OnDestroy {
  controls: SentinelControlItem[] = [];
  instanceSimulatorDataSubject$: BehaviorSubject<InstanceModelSimulator> = new BehaviorSubject(null);
  instanceSimulatorData$: Observable<InstanceModelSimulator> = this.instanceSimulatorDataSubject$.asObservable();

  constructor(private instanceSimulatorService: InstanceSimulatorService) {}

  ngOnInit(): void {
    this.controls = InstanceModelSimulatorControls.create(this.instanceSimulatorService);
    this.instanceSimulatorData$ = this.instanceSimulatorService.uploadedInstanceData$;
  }

  /**
   * Resolves controls action and calls appropriate handler
   * @param control selected control emitted by controls component
   */
  onControlsAction(control: SentinelControlItem): void {
    control.result$.pipe(take(1)).subscribe();
  }

  phaseChanged(phase: TrainingPhase): void {
    this.instanceSimulatorService.updatePhase(phase);
  }

  ngOnDestroy(): void {
    this.instanceSimulatorService.clearInstance();
  }
}
