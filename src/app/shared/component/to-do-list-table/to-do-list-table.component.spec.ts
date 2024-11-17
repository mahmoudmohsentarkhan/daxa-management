import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListTableComponent } from './to-do-list-table.component';

describe('ToDoListTableComponent', () => {
  let component: ToDoListTableComponent;
  let fixture: ComponentFixture<ToDoListTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToDoListTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoListTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
