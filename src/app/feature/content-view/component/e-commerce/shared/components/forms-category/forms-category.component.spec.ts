import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCategoryComponent } from './forms-category.component';

describe('FormsCategoryComponent', () => {
  let component: FormsCategoryComponent;
  let fixture: ComponentFixture<FormsCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
