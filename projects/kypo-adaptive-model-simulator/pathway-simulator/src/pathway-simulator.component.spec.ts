import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathwaySimulatorComponent } from './pathway-simulator.component';

describe('TransitionSimulatorComponent', () => {
  let component: PathwaySimulatorComponent;
  let fixture: ComponentFixture<PathwaySimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PathwaySimulatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PathwaySimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
