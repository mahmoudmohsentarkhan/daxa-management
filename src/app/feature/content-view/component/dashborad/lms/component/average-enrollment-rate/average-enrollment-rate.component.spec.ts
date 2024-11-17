import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageEnrollmentRateComponent } from './average-enrollment-rate.component';

describe('AverageEnrollmentRateComponent', () => {
  let component: AverageEnrollmentRateComponent;
  let fixture: ComponentFixture<AverageEnrollmentRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AverageEnrollmentRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AverageEnrollmentRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
