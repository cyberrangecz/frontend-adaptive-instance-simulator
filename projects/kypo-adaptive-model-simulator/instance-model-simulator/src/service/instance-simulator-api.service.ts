import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { InstanceSimulatorMapper } from './mapper/instance-simulator-mapper';
import { InstanceModelSimulator } from '../model/instance-model-simulator';
import { InstanceModelSimulatorDTO } from '../model/instance-model-simulator-dto';
import { ModelSimulatorConfig } from '@muni-kypo-crp/adaptive-model-simulator/internal';
import { AdaptiveTrainingSankeyDataDTO, SankeyDataMapper } from '@muni-kypo-crp/adaptive-visualization';
import { TrainingDefinition } from '@muni-kypo-crp/training-model';
import { AdaptiveTrainingSankeyData } from '@muni-kypo-crp/adaptive-visualization';

@Injectable()
export class InstanceSimulatorApiService {
  readonly trainingInstanceUriExtension = 'training-instances';
  readonly trainingImportEndpointUri: string;

  constructor(private http: HttpClient, private config: ModelSimulatorConfig) {}

  /**
   * Sends https request to upload exported training instance data from already finished training instance.
   * @param file exported training instance
   * @return training definition and sankey diagram associated with exported training instance
   */
  upload(file: File): Observable<InstanceModelSimulator> {
    const headers = new HttpHeaders().append('Content-Type', ['application/octet-stream']);
    const zipFile = new FormData();
    zipFile.append('instance-data.zip', file);
    return this.http
      .post<InstanceModelSimulatorDTO>(
        `${this.config.adaptiveTrainingServiceUrl}visualizations/training-instances/simulator`,
        file,
        {
          headers: headers,
        }
      )
      .pipe(map((resp) => InstanceSimulatorMapper.fromDTO(resp)));
  }

  /**
   * Sends https request to generate sankey diagram from previously uploaded instance data stored in cache on
   * backend side. This data are identified by combination of definition id, instance id and access token.
   * @param definition changed training definition
   * @return data for sankey diagram visualization
   */
  generate(definition: TrainingDefinition): Observable<AdaptiveTrainingSankeyData> {
    return this.http
      .post<AdaptiveTrainingSankeyDataDTO>(
        `${this.config.adaptiveTrainingServiceUrl}visualizations/training-instances/generate`,
        definition
      )
      .pipe(map((resp) => SankeyDataMapper.fromDTOs(resp)));
  }
}
