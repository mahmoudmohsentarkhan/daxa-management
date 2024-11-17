import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningReportsComponent } from './earning-reports.component';

describe('EarningReportsComponent', () => {
  let component: EarningReportsComponent;
  let fixture: ComponentFixture<EarningReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EarningReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EarningReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
