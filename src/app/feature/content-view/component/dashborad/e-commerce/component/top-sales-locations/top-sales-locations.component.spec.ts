import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSalesLocationsComponent } from './top-sales-locations.component';

describe('TopSalesLocationsComponent', () => {
  let component: TopSalesLocationsComponent;
  let fixture: ComponentFixture<TopSalesLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSalesLocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSalesLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
