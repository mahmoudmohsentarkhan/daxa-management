import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCoursesSalesComponent } from './total-courses-sales.component';

describe('TotalCoursesSalesComponent', () => {
  let component: TotalCoursesSalesComponent;
  let fixture: ComponentFixture<TotalCoursesSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalCoursesSalesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalCoursesSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
