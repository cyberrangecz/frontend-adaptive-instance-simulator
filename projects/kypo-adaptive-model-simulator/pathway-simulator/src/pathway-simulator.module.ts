import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathwaySimulatorComponent } from './pathway-simulator.component';
import { KypoAdaptiveTransitionVisualizationModule } from '@cyberrangecz-platform/adaptive-transition-visualization';

@NgModule({
  declarations: [PathwaySimulatorComponent],
  imports: [CommonModule, KypoAdaptiveTransitionVisualizationModule.forRoot(null)],
  exports: [PathwaySimulatorComponent],
})
export class PathwaySimulatorModule {}
