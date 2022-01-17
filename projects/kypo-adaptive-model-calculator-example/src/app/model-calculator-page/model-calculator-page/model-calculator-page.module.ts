import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModelCalculatorPageComponent } from './model-calculator-page.component';
import { ModelCalculatorPageRoutingModule } from './model-calculator-page-routing.module';

@NgModule({
  declarations: [ModelCalculatorPageComponent],
  imports: [CommonModule, ModelCalculatorPageRoutingModule],
})
export class ModelCalculatorPageModule {}
