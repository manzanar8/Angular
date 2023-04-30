import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepFinancierosComponent } from './step-financieros.component';

describe('StepFinancierosComponent', () => {
  let component: StepFinancierosComponent;
  let fixture: ComponentFixture<StepFinancierosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepFinancierosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepFinancierosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
