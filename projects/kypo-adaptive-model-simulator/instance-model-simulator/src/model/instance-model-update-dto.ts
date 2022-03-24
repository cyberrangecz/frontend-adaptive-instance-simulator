import { AbstractPhaseDTO } from '@muni-kypo-crp/training-api';

export class InstanceModelUpdateDTO {
  cache_id: string;
  phases: AbstractPhaseDTO[];
}
