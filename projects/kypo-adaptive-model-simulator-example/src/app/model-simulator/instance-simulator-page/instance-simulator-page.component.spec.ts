import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstanceSimulatorPageComponent } from './instance-simulator-page.component';

describe('InstanceSimulatorPageComponent', () => {
  let component: InstanceSimulatorPageComponent;
  let fixture: ComponentFixture<InstanceSimulatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InstanceSimulatorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstanceSimulatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
