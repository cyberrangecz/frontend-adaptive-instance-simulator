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

  private instanceSimulatorDataSubject$: BehaviorSubject<InstanceModelSimulator> = new BehaviorSubject(null);
  instanceSimulatorData$: Observable<InstanceModelSimulator> = this.instanceSimulatorDataSubject$.asObservable();

  private disableGenerateSubject$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  disableGenerate$: Observable<boolean> = this.disableGenerateSubject$.asObservable();

  constructor(private instanceSimulatorService: InstanceSimulatorService) {}

  ngOnInit(): void {
    this.controls = InstanceModelSimulatorControls.create(this.instanceSimulatorService, this.disableGenerate$);
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
    this.disableGenerateSubject$.next(false);
    this.instanceSimulatorService.updatePhase(phase);
  }

  phaseValid(isPhaseValid: boolean): void {
    this.disableGenerateSubject$.next(!isPhaseValid);
  }

  ngOnDestroy(): void {
    this.instanceSimulatorService.clearInstance();
  }
}
