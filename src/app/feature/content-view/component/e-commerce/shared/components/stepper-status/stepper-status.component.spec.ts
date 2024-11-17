import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperStatusComponent } from './stepper-status.component';

describe('StepperStatusComponent', () => {
  let component: StepperStatusComponent;
  let fixture: ComponentFixture<StepperStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StepperStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
