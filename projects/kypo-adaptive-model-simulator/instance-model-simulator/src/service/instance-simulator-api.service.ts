import { Injectable } from '@angular/core';
import { fromEvent, map, mergeMap, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { InstanceSimulatorMapper } from './mapper/instance-simulator-mapper';
import { InstanceModelSimulator } from '../model/instance-model-simulator';
import { InstanceModelSimulatorDTO } from '../model/instance-model-simulator-dto';

@Injectable()
export class InstanceSimulatorApiService {
  readonly trainingInstanceUriExtension = 'training-instances';
  readonly trainingImportEndpointUri: string;

  constructor(private http: HttpClient) {}

  upload(file: File): Observable<InstanceModelSimulator> {
    const fileReader = new FileReader();
    const fileRead$ = fromEvent(fileReader, 'load').pipe(
      mergeMap(() => {
        const jsonBody = JSON.parse(fileReader.result as string);
        return this.http.post<InstanceModelSimulatorDTO>(
          `http://localhost:3000/kypo-adaptive-training/api/v1/training-instances/instances`,
          jsonBody
        );
      })
    );
    fileReader.readAsText(file);
    return fileRead$.pipe(map((resp) => InstanceSimulatorMapper.fromDTO(resp)));
  }
}
