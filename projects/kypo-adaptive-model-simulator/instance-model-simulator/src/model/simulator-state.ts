import { HttpErrorResponse } from '@angular/common/http';

export class SimulatorState {
  state: BasicEventInfo.EventStateTypeEnum;
  message: string;
  error?: HttpErrorResponse;

  constructor(message: string, state: BasicEventInfo.EventStateTypeEnum, error?: HttpErrorResponse) {
    this.message = message;
    this.state = state;
    this.error = error;
  }
}

export namespace BasicEventInfo {
  export type EventStateTypeEnum = 'ERROR_EVENT' | 'NOTIFICATION_EVENT';
  export const EventStateTypeEnum = {
    ERROR_EVENT: 'ERROR_EVENT' as EventStateTypeEnum,
    NOTIFICATION_EVENT: 'NOTIFICATION_EVENT' as EventStateTypeEnum,
  };
}
