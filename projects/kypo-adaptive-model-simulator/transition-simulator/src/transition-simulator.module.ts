import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionSimulatorComponent } from './transition-simulator.component';
import { KypoAdaptiveTransitionVisualizationModule } from '@muni-kypo-crp/adaptive-transition-visualization';

@NgModule({
  declarations: [TransitionSimulatorComponent],
  imports: [CommonModule, KypoAdaptiveTransitionVisualizationModule.forRoot(null)],
  exports: [TransitionSimulatorComponent],
})
export class TransitionSimulatorModule {}
