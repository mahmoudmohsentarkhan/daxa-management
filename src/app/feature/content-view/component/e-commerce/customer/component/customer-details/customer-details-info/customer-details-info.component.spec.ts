import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsInfoComponent } from './customer-details-info.component';

describe('CustomerDetailsInfoComponent', () => {
  let component: CustomerDetailsInfoComponent;
  let fixture: ComponentFixture<CustomerDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
