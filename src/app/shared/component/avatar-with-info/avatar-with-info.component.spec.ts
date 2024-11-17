import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarWithInfoComponent } from './avatar-with-info.component';

describe('AvatarWithInfoComponent', () => {
  let component: AvatarWithInfoComponent;
  let fixture: ComponentFixture<AvatarWithInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvatarWithInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvatarWithInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
