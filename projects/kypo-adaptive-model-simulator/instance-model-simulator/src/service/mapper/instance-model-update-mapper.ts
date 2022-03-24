import { InstanceModelSimulator } from '../../model/instance-model-simulator';
import { InstanceModelUpdateDTO } from '../../model/instance-model-update-dto';
import { PhaseMapper } from '@muni-kypo-crp/training-api';
import { Phase } from '@muni-kypo-crp/training-model';

export class InstanceModelUpdateMapper {
  static toUpdateDTO(data: InstanceModelSimulator): InstanceModelUpdateDTO {
    const dto = new InstanceModelUpdateDTO();
    dto.phases = PhaseMapper.toUpdateDTOs(data.trainingDefinition.levels as Phase[]);
    dto.cache_id = data.cacheId;

    return dto;
  }
}
