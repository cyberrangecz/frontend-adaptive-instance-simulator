import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';

@Injectable()
export class InstanceSimulatorApiService {
  constructor() {}

  upload(file: any): Observable<any> {
    // http request
    return EMPTY;
  }
}
