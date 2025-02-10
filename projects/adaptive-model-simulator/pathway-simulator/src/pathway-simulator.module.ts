import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PathwaySimulatorComponent } from './pathway-simulator.component';
import { AdaptiveTransitionVisualizationModule } from '@cyberrangecz-platform/adaptive-transition-visualization';

@NgModule({
  declarations: [PathwaySimulatorComponent],
  imports: [CommonModule, AdaptiveTransitionVisualizationModule.forRoot(null)],
  exports: [PathwaySimulatorComponent],
})
export class PathwaySimulatorModule {}
