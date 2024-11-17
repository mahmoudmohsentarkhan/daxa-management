import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPaymentStatusComponent } from './client-payment-status.component';

describe('ClientPaymentStatusComponent', () => {
  let component: ClientPaymentStatusComponent;
  let fixture: ComponentFixture<ClientPaymentStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientPaymentStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientPaymentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
