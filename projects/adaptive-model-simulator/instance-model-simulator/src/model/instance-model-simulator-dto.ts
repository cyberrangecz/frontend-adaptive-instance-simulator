import { TrainingDefinitionDTO } from '@cyberrangecz-platform/training-api';
import { AdaptiveTrainingSankeyDataDTO } from '@cyberrangecz-platform/adaptive-visualization';

export class InstanceModelSimulatorDTO {
  training_definition: TrainingDefinitionDTO;
  sankey_diagram: AdaptiveTrainingSankeyDataDTO;
  cache_key: string;
}
