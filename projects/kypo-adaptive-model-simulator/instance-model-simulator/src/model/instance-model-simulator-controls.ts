/**
 * @dynamic
 */
import { InstanceSimulatorService } from '../service/instance-simulator.service';
import { SentinelControlItem } from '@sentinel/components/controls';
import { defer, of } from 'rxjs';

export class InstanceModelSimulatorControls {
  static readonly UPLOAD_ACTION_ID = 'upload';

  static create(service: InstanceSimulatorService): SentinelControlItem[] {
    return [
      new SentinelControlItem(
        this.UPLOAD_ACTION_ID,
        'Upload',
        'primary',
        of(false),
        defer(() => service.upload())
      ),
    ];
  }
}
