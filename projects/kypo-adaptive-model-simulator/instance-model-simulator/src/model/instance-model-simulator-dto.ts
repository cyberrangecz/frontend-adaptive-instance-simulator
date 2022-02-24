import { TrainingDefinitionDTO } from '@muni-kypo-crp/training-api';
import { AdaptiveTrainingSankeyDataDTO } from '@muni-kypo-crp/adaptive-visualization';

export class InstanceModelSimulatorDTO {
  training_definition: TrainingDefinitionDTO;
  sankey_diagram: AdaptiveTrainingSankeyDataDTO;
}
