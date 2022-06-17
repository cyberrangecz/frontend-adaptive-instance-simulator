import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSimulatorComponent } from './model-simulator.component';
import { ModelSimulatorService } from './service/model-simulator.service';
import { PathwaySimulatorModule } from '@muni-kypo-crp/adaptive-model-simulator/pathway-simulator';
import { PerformanceSimulatorModule } from '@muni-kypo-crp/adaptive-model-simulator/performance-simulator';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ModelSimulatorComponent],
  providers: [ModelSimulatorService],
  exports: [ModelSimulatorComponent],
  imports: [CommonModule, PerformanceSimulatorModule, PathwaySimulatorModule, MatDividerModule],
})
export class ModelSimulatorModule {}
