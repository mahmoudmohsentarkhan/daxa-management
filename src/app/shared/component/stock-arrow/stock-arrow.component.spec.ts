import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockArrowComponent } from './stock-arrow.component';

describe('StockArrowComponent', () => {
  let component: StockArrowComponent;
  let fixture: ComponentFixture<StockArrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockArrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StockArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
