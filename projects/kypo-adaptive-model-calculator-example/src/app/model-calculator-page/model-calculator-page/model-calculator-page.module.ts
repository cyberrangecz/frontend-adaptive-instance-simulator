import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCalculatorPageComponent } from './model-calculator-page.component';
import { ModelCalculatorPageRoutingModule } from './model-calculator-page-routing.module';
import { ModelSimulatorModule } from '@muni-kypo-crp/adaptive-model-calculator/model-simulator';

@NgModule({
  declarations: [ModelCalculatorPageComponent],
  imports: [CommonModule, ModelSimulatorModule, ModelCalculatorPageRoutingModule],
})
export class ModelCalculatorPageModule {}
