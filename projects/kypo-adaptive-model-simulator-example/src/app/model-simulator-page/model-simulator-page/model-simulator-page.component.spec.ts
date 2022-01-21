import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelSimulatorPageComponent } from './model-simulator-page.component';

describe('ModelSimulatorPageComponent', () => {
  let component: ModelSimulatorPageComponent;
  let fixture: ComponentFixture<ModelSimulatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelSimulatorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelSimulatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
