import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelSimulatorComponent } from './model-simulator.component';
import { ModelSimulatorService } from './service/model-simulator.service';
import { MatDividerModule } from '@angular/material/divider';
import { PathwaySimulatorModule } from '@cyberrangecz-platform/adaptive-model-simulator/pathway-simulator';
import { PerformanceSimulatorModule } from '@cyberrangecz-platform/adaptive-model-simulator/performance-simulator';

@NgModule({
  declarations: [ModelSimulatorComponent],
  providers: [ModelSimulatorService],
  exports: [ModelSimulatorComponent],
  imports: [CommonModule, PerformanceSimulatorModule, PathwaySimulatorModule, MatDividerModule],
})
export class ModelSimulatorModule {}
