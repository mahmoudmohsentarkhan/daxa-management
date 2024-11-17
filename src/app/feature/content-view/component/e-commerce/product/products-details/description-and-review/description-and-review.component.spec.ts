import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionAndReviewComponent } from './description-and-review.component';

describe('DescriptionAndReviewComponent', () => {
  let component: DescriptionAndReviewComponent;
  let fixture: ComponentFixture<DescriptionAndReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescriptionAndReviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescriptionAndReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
