/**disableGenerate$
 * @dynamic
 */
import { InstanceSimulatorService } from '../service/instance-simulator.service';
import { SentinelControlItem } from '@sentinel/components/controls';
import { combineLatest, defer, Observable, of, tap } from 'rxjs';

export class InstanceModelSimulatorControls {
  static readonly UPLOAD_ACTION_ID = 'upload';
  static readonly EXPORT_ACTION_ID = 'export';
  static readonly GENERATE_ACTION_ID = 'generate';

  static create(service: InstanceSimulatorService, disableGenerate$: Observable<boolean>): SentinelControlItem[] {
    return [
      new SentinelControlItem(
        this.GENERATE_ACTION_ID,
        'Generate',
        'primary',
        disableGenerate$,
        defer(() => service.generate())
      ),
      new SentinelControlItem(
        this.EXPORT_ACTION_ID,
        'Export',
        'primary',
        service.actionsDisabled$,
        defer(() => service.export())
      ),
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
