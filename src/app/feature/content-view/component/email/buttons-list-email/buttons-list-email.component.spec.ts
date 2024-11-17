import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsListEmailComponent } from './buttons-list-email.component';

describe('ButtonsListEmailComponent', () => {
  let component: ButtonsListEmailComponent;
  let fixture: ComponentFixture<ButtonsListEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonsListEmailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonsListEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
