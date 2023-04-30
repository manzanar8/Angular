import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepGeneralesComponent } from './step-generales.component';

describe('StepGeneralesComponent', () => {
  let component: StepGeneralesComponent;
  let fixture: ComponentFixture<StepGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
