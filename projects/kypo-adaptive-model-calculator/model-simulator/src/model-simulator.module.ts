import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSimulatorComponent } from './model-simulator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SentinelFreeFormModule } from '@sentinel/components/free-form';
import { MatrixSimulatorModule } from '@muni-kypo-crp/adaptive-model-calculator/matrix-simulator';

@NgModule({
  declarations: [ModelSimulatorComponent],
  exports: [ModelSimulatorComponent],
  imports: [CommonModule, MatrixSimulatorModule],
})
export class ModelSimulatorModule {}
