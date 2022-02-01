import { Component, OnInit } from '@angular/core';
import { Agenda, AgendaContainer } from '@sentinel/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kypo-adaptive-model-simulator';
  agendaContainers: AgendaContainer[];

  ngOnInit(): void {
    const containers = [new Agenda('Simulator', 'home'), new Agenda('Upload', 'instance-model-simulator')];
    this.agendaContainers = [new AgendaContainer('Visualizations', containers)];
  }
}
