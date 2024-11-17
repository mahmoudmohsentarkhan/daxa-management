import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideProductGridComponent } from './aside-product-grid.component';

describe('AsideProductGridComponent', () => {
  let component: AsideProductGridComponent;
  let fixture: ComponentFixture<AsideProductGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsideProductGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsideProductGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
