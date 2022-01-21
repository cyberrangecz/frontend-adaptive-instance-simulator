import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelSimulatorComponent } from './model-simulator.component';

describe('ModelSimulatorComponent', () => {
  let component: ModelSimulatorComponent;
  let fixture: ComponentFixture<ModelSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelSimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
