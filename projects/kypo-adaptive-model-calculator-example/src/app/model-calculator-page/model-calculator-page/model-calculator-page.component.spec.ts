import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelCalculatorPageComponent } from './model-calculator-page.component';

describe('ModelCalculatorPageComponent', () => {
  let component: ModelCalculatorPageComponent;
  let fixture: ComponentFixture<ModelCalculatorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelCalculatorPageComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelCalculatorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
