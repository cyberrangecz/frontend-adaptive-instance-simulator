import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSimulatorComponent } from './model-simulator.component';
import { MatrixSimulatorModule } from '@muni-kypo-crp/adaptive-model-calculator/matrix-simulator';
import { TransitionSimulatorModule } from '@muni-kypo-crp/adaptive-model-calculator/transition-simulator';

@NgModule({
  declarations: [ModelSimulatorComponent],
  exports: [ModelSimulatorComponent],
  imports: [CommonModule, MatrixSimulatorModule, TransitionSimulatorModule],
})
export class ModelSimulatorModule {}
