import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransitionSimulatorComponent } from './transition-simulator.component';
import {
  AdaptiveTransitionVisualizationConfig,
  KypoAdaptiveTransitionVisualizationModule,
} from '@muni-kypo-crp/adaptive-transition-visualization';
import { ModelSimulatorModule } from '@muni-kypo-crp/adaptive-model-calculator/model-simulator';

@NgModule({
  declarations: [TransitionSimulatorComponent],
  imports: [CommonModule, KypoAdaptiveTransitionVisualizationModule.forRoot(null)],
  exports: [TransitionSimulatorComponent],
})
export class TransitionSimulatorModule {}
