import { InstanceModelSimulatorDTO } from '../../model/instance-model-simulator-dto';
import { InstanceModelSimulator } from '../../model/instance-model-simulator';
import { TrainingDefinitionMapper } from '@muni-kypo-crp/training-api';
import { SankeyDataMapper } from '@muni-kypo-crp/adaptive-visualization';

export class InstanceSimulatorMapper {
  static fromDTO(dto: InstanceModelSimulatorDTO): InstanceModelSimulator {
    const result = new InstanceModelSimulator();
    result.trainingDefinition = TrainingDefinitionMapper.fromDTO(dto.trainingDefinitionDTO, false, true);
    result.sankeyData = SankeyDataMapper.fromDTOs(dto.sankeyDataDTO);
    return result;
  }
}
