import { TrainingDefinition } from '@cyberrangecz-platform/training-model';
import { AdaptiveTrainingSankeyData } from '@cyberrangecz-platform/adaptive-visualization';

export class InstanceModelSimulator {
  trainingDefinition: TrainingDefinition;
  sankeyData: AdaptiveTrainingSankeyData;
  cacheId: string;
}
