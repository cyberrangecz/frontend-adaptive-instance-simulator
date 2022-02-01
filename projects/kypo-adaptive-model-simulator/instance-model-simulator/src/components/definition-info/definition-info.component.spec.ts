import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefinitionInfoComponent } from './definition-info.component';

describe('DefinitionInfoComponent', () => {
  let component: DefinitionInfoComponent;
  let fixture: ComponentFixture<DefinitionInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DefinitionInfoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefinitionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
