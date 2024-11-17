import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLeadsComponent } from './most-leads.component';

describe('MostLeadsComponent', () => {
  let component: MostLeadsComponent;
  let fixture: ComponentFixture<MostLeadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostLeadsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostLeadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
