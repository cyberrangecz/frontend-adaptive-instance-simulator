import { Injectable } from '@angular/core';
import { InstanceUploadDialogComponent } from '../components/instance-upload-dialog/instance-upload-dialog.component';
import { BehaviorSubject, Observable, switchMap, take, tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadProgressService } from './file-upload-progress.service';
import { InstanceSimulatorApiService } from './instance-simulator-api.service';

@Injectable()
export class InstanceSimulatorService {

  private uploadedInstanceDataSubject$: BehaviorSubject<any> = new BehaviorSubject(null);
  uploadedInstanceData$: Observable<any> = this.uploadedInstanceDataSubject$.asObservable();

  constructor(
    private dialog: MatDialog,
    private fileUploadProgressService: FileUploadProgressService,
    private api: InstanceSimulatorApiService
  ) {}

  upload() {
    const dialogRef = this.dialog.open(InstanceUploadDialogComponent);
    return dialogRef.componentInstance.onUpload$.pipe(
      take(1),
      tap(() => this.fileUploadProgressService.start()),
      switchMap((file) => this.api.upload(file)),
      tap(
        (data) => {
          // this.notificationService.emit('success', 'Training definition was uploaded');
          this.fileUploadProgressService.finish();
          this.uploadedInstanceDataSubject$.next(data);
          dialogRef.close();
        },
        (err) => {
          this.fileUploadProgressService.finish();
          // this.errorHandler.emit(err, 'Uploading training definition');
        }
      )
    );
  }
}
