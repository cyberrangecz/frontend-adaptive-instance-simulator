import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { FileUploadProgressService } from '../../../instance-model-simulator/src/service/file-upload-progress.service';
import { InstanceSimulatorApiService } from '../../../instance-model-simulator/src/service/instance-simulator-api.service';
import { InstanceSimulatorService } from '../../../instance-model-simulator/src/service/instance-simulator.service';
import { ModelSimulatorService } from '../../../model-simulator/src/service/model-simulator.service';

export function createDialogSpy(): jasmine.SpyObj<MatDialog> {
  return jasmine.createSpyObj('MatDialog', ['open', 'close']);
}

export function createFileUploadProgressServiceSpy(): jasmine.SpyObj<FileUploadProgressService> {
  return jasmine.createSpyObj('FileUploadProgressService', ['start', 'finish']);
}

export function createInstanceSimulatorApiServiceSpy(): jasmine.SpyObj<InstanceSimulatorApiService> {
  return jasmine.createSpyObj('InstanceSimulatorApiService', ['upload', 'generate']);
}

export function createInstanceSimulatorServiceSpy(): jasmine.SpyObj<InstanceSimulatorService> {
  return jasmine.createSpyObj('InstanceSimulatorService', [
    'upload',
    'export',
    'generate',
    'updatePhase',
    'clearInstance',
  ]);
}

export function createModelSimulatorServiceSpy(): jasmine.SpyObj<ModelSimulatorService> {
  return jasmine.createSpyObj('ModelSimulatorService', ['computeTraineePath']);
}
