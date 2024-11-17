import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeSpendingComponent } from './time-spending.component';

describe('TimeSpendingComponent', () => {
  let component: TimeSpendingComponent;
  let fixture: ComponentFixture<TimeSpendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeSpendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeSpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
