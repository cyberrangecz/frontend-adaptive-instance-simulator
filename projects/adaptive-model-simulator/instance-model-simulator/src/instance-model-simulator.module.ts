import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceModelSimulatorComponent } from './instance-model-simulator.component';
import { InstanceModelSimulatorMaterialModule } from './instance-model-simulator-material.module';
import { DefinitionInfoComponent } from './components/definition-info/definition-info.component';
import { InstanceSimulatorComponent } from './components/instance-simulator/instance-simulator.component';
import { InstanceSimulatorService } from './service/instance-simulator.service';
import { SentinelControlsComponent } from '@sentinel/components/controls';
import { InstanceUploadDialogComponent } from './components/instance-upload-dialog/instance-upload-dialog.component';
import { FileUploadProgressService } from './service/file-upload-progress.service';
import { InstanceSimulatorApiService } from './service/instance-simulator-api.service';
import { ngfModule } from 'angular-file';
import { SentinelPipesModule } from '@sentinel/common/pipes';
import {
  AdaptiveVisualizationConfig,
  AdaptiveVisualizationLibModule,
} from '@cyberrangecz-platform/adaptive-visualization';
import { ModelSimulatorConfig } from '@cyberrangecz-platform/adaptive-model-simulator/internal';
import { SentinelFreeFormComponent } from '@sentinel/components/free-form';
import { PhaseStepperComponent } from './components/definition-info/stepper/phase-stepper.component';
import { SentinelStepperModule } from '@sentinel/components/stepper';
import { PhaseEditComponentsModule } from './components/definition-info/phase-edit/phase-edit-components.module';

@NgModule({
  declarations: [
    InstanceModelSimulatorComponent,
    DefinitionInfoComponent,
    InstanceSimulatorComponent,
    InstanceUploadDialogComponent,
    PhaseStepperComponent,
  ],
  exports: [InstanceModelSimulatorComponent],
  imports: [
    CommonModule,
    InstanceModelSimulatorMaterialModule,
    SentinelControlsComponent,
    ngfModule,
    SentinelPipesModule,
    AdaptiveVisualizationLibModule,
    PhaseEditComponentsModule,
    SentinelFreeFormComponent,
    SentinelStepperModule,
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
        {
          provide: ModelSimulatorConfig,
          useValue: config,
        },
      ],
    };
  }
}
