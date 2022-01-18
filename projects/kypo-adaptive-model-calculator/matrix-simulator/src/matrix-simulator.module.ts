import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatrixSimulatorMaterialModule } from './matrix-simulator-material.module';

@NgModule({
  declarations: [MatrixComponent],
  exports: [MatrixComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatrixSimulatorMaterialModule],
})
export class MatrixSimulatorModule {}
