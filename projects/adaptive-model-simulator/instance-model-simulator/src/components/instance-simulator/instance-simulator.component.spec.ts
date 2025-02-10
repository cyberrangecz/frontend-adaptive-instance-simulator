import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceSimulatorComponent } from './instance-simulator.component';

describe('InstanceSimulatorComponent', () => {
  let component: InstanceSimulatorComponent;
  let fixture: ComponentFixture<InstanceSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstanceSimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
