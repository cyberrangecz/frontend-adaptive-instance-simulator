import { NgModule } from '@angular/core';
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
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    InstanceModelSimulatorComponent,
    DefinitionInfoComponent,
    InstanceSimulatorComponent,
    InstanceUploadDialogComponent,
  ],
  exports: [InstanceModelSimulatorComponent],
  imports: [CommonModule, InstanceModelSimulatorMaterialModule, SentinelControlsModule, ngfModule],
  providers: [InstanceSimulatorService, FileUploadProgressService, InstanceSimulatorApiService],
})
export class InstanceModelSimulatorModule {}
