import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProjectsUserComponent } from './chat-projects-user.component';

describe('ChatProjectsUserComponent', () => {
  let component: ChatProjectsUserComponent;
  let fixture: ComponentFixture<ChatProjectsUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatProjectsUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatProjectsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
