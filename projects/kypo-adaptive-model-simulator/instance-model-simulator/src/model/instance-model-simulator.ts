import { TrainingDefinition } from '@muni-kypo-crp/training-model';
import { AdaptiveTrainingSankeyData } from '@muni-kypo-crp/adaptive-visualization';

export class InstanceModelSimulator {
  trainingDefinition: TrainingDefinition;
  sankeyData: AdaptiveTrainingSankeyData;
  cacheId: string;
}
