import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveProjectComponent } from './active-project.component';

describe('ActiveProjectComponent', () => {
  let component: ActiveProjectComponent;
  let fixture: ComponentFixture<ActiveProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
