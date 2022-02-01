import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceModelSimulatorComponent } from './instance-model-simulator.component';

describe('InstanceModelSimulatorComponent', () => {
  let component: InstanceModelSimulatorComponent;
  let fixture: ComponentFixture<InstanceModelSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstanceModelSimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceModelSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
