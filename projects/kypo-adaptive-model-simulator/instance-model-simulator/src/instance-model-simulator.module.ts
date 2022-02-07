import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceModelSimulatorComponent } from './instance-model-simulator.component';
import { InstanceModelSimulatorMaterialModule } from './instance-model-simulator-material.module';
import { DefinitionInfoComponent } from './components/definition-info/definition-info.component';
import { InstanceSimulatorComponent } from './components/instance-simulator/instance-simulator.component';
import { InstanceSimulatorService } from './service/instance-simulator.service';
import { SentinelControlsModule } from '@sentinel/components/controls';
import { InstanceUploadDialogComponent } from './components/instance-upload-dialog/instance-upload-dialog.component';
import { FileUploadProgressService } from './service/file-upload-progress.service';
import { InstanceSimulatorApiService } from './service/instance-simulator-api.service';
import { ngfModule } from 'angular-file';
import { SentinelPipesModule } from '@sentinel/common';
import { AdaptiveVisualizationConfig, KypoAdaptiveVisualizationLibModule } from '@muni-kypo-crp/adaptive-visualization';
import { ModelSimulatorConfig } from '@muni-kypo-crp/adaptive-model-simulator/internal';

@NgModule({
  declarations: [
    InstanceModelSimulatorComponent,
    DefinitionInfoComponent,
    InstanceSimulatorComponent,
    InstanceUploadDialogComponent,
  ],
  exports: [InstanceModelSimulatorComponent],
  imports: [
    CommonModule,
    InstanceModelSimulatorMaterialModule,
    SentinelControlsModule,
    ngfModule,
    SentinelPipesModule,
    KypoAdaptiveVisualizationLibModule,
  ],
  providers: [InstanceSimulatorService, FileUploadProgressService, InstanceSimulatorApiService],
})
export class InstanceModelSimulatorModule {
  static forRoot(config: ModelSimulatorConfig): ModuleWithProviders<InstanceModelSimulatorModule> {
    return {
      ngModule: InstanceModelSimulatorModule,
      providers: [
        {
          provide: AdaptiveVisualizationConfig,
          useValue: config,
        },
      ],
    };
  }
}
