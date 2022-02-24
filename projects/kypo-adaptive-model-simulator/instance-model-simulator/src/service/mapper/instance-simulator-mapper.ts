import { InstanceModelSimulatorDTO } from '../../model/instance-model-simulator-dto';
import { InstanceModelSimulator } from '../../model/instance-model-simulator';
import { TrainingDefinitionMapper } from '@muni-kypo-crp/training-api';
import { SankeyDataMapper } from '@muni-kypo-crp/adaptive-visualization';

export class InstanceSimulatorMapper {
  static fromDTO(dto: InstanceModelSimulatorDTO): InstanceModelSimulator {
    const result = new InstanceModelSimulator();
    console.log(dto);
    result.trainingDefinition = TrainingDefinitionMapper.fromDTO(dto.training_definition, false, true);
    result.sankeyData = SankeyDataMapper.fromDTOs(dto.sankey_diagram);
    return result;
  }
}
