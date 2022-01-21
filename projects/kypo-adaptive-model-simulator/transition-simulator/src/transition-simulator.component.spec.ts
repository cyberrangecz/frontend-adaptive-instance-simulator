import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSimulatorComponent } from './transition-simulator.component';

describe('TransitionSimulatorComponent', () => {
  let component: TransitionSimulatorComponent;
  let fixture: ComponentFixture<TransitionSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransitionSimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
