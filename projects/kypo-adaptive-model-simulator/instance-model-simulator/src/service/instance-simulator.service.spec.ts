import { TestBed } from '@angular/core/testing';
import { InstanceSimulatorService } from './instance-simulator.service';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadProgressService } from './file-upload-progress.service';
import { InstanceSimulatorApiService } from './instance-simulator-api.service';
import {
  createDialogSpy,
  createFileUploadProgressServiceSpy,
  createInstanceSimulatorApiServiceSpy,
} from '../../../internal/src/testing/testing-commons.spec';

describe('InstanceSimulatorService', () => {
  let service: InstanceSimulatorService;
  let dialogSpy: jasmine.SpyObj<MatDialog>;
  let fileUploadProgressServiceSpy: jasmine.SpyObj<FileUploadProgressService>;
  let instanceSimulatorApiServiceSpy: jasmine.SpyObj<InstanceSimulatorApiService>;

  beforeEach(() => {
    dialogSpy = createDialogSpy();
    fileUploadProgressServiceSpy = createFileUploadProgressServiceSpy();
    instanceSimulatorApiServiceSpy = createInstanceSimulatorApiServiceSpy();
    TestBed.configureTestingModule({
      providers: [
        { provide: MatDialog, useValue: dialogSpy },
        { provide: FileUploadProgressService, useValue: fileUploadProgressServiceSpy },
        { provide: InstanceSimulatorApiService, useValue: instanceSimulatorApiServiceSpy },
      ],
    });
    service = TestBed.inject(InstanceSimulatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
