import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsTransactionsComponent } from './customer-details-transactions.component';

describe('CustomerDetailsTransactionsComponent', () => {
  let component: CustomerDetailsTransactionsComponent;
  let fixture: ComponentFixture<CustomerDetailsTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
