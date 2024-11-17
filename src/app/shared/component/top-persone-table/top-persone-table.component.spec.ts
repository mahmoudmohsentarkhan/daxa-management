import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPersoneTableComponent } from './top-persone-table.component';

describe('TopPersoneTableComponent', () => {
  let component: TopPersoneTableComponent;
  let fixture: ComponentFixture<TopPersoneTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopPersoneTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopPersoneTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
