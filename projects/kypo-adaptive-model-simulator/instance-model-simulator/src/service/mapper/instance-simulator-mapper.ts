import { InstanceModelSimulatorDTO } from '../../model/instance-model-simulator-dto';
import { InstanceModelSimulator } from '../../model/instance-model-simulator';
import { TrainingDefinitionMapper } from '@cyberrangecz-platform/training-api';
import { SankeyDataMapper } from '@cyberrangecz-platform/adaptive-visualization';

export class InstanceSimulatorMapper {
  static fromDTO(dto: InstanceModelSimulatorDTO): InstanceModelSimulator {
    const result = new InstanceModelSimulator();
    result.trainingDefinition = TrainingDefinitionMapper.fromDTO(dto.training_definition, false, true);
    result.sankeyData = SankeyDataMapper.fromDTOs(dto.sankey_diagram);
    result.cacheId = dto.cache_key;
    return result;
  }
}
