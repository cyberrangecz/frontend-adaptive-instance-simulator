import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceSimulatorPageComponent } from './instance-simulator-page.component';
import { InstanceSimulatorPageRoutingModule } from './instance-simulator-page-routing.module';
import {
  InstanceModelSimulatorModule,
  TrainingErrorHandler,
  TrainingNotificationService,
} from '@muni-kypo-crp/adaptive-model-simulator/instance-model-simulator';
import { environment } from '../../../environments/environment';
import { ClientErrorHandlerService } from '../../services/client-error-handler.service';
import { ClientNotificationService } from '../../services/client-notification.service';

@NgModule({
  declarations: [InstanceSimulatorPageComponent],
  imports: [
    CommonModule,
    InstanceSimulatorPageRoutingModule,
    InstanceModelSimulatorModule.forRoot(environment.modelSimulatorConfig),
  ],
  providers: [
    { provide: TrainingErrorHandler, useClass: ClientErrorHandlerService },
    { provide: TrainingNotificationService, useClass: ClientNotificationService },
  ],
})
export class InstanceSimulatorPageModule {}
