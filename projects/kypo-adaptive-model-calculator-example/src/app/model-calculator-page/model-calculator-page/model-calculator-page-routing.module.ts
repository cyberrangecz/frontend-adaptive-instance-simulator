import { NgModule } from '@angular/core';
import { ModelCalculatorPageComponent } from './model-calculator-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ModelCalculatorPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModelCalculatorPageRoutingModule {}
