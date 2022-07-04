import { NgModule, SecurityContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstanceSimulatorPageComponent } from './instance-simulator-page.component';
import { InstanceSimulatorPageRoutingModule } from './instance-simulator-page-routing.module';
import { InstanceModelSimulatorModule } from '@muni-kypo-crp/adaptive-model-simulator/instance-model-simulator';
import { environment } from '../../../environments/environment';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [InstanceSimulatorPageComponent],
  imports: [
    CommonModule,
    InstanceSimulatorPageRoutingModule,
    InstanceModelSimulatorModule.forRoot(environment.modelSimulatorConfig),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
    }),
  ],
})
export class InstanceSimulatorPageModule {}
