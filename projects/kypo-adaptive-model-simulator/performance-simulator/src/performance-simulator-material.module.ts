import { NgModule } from '@angular/core';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyCheckboxModule as MatCheckboxModule } from '@angular/material/legacy-checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { MatLegacyTableModule as MatTableModule } from '@angular/material/legacy-table';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatExpansionModule,
    MatTooltipModule,
    MatCheckboxModule,
    MatDividerModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
  ],
})
export class PerformanceSimulatorMaterialModule {}
