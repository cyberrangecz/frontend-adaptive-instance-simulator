import { AbstractPhaseDTO } from '@cyberrangecz-platform/training-api';

export class InstanceModelUpdateDTO {
  cache_id: string;
  phases: AbstractPhaseDTO[];
}
