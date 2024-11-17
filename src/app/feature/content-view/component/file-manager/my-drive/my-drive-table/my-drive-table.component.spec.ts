import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDriveTableComponent } from './my-drive-table.component';

describe('MyDriveTableComponent', () => {
  let component: MyDriveTableComponent;
  let fixture: ComponentFixture<MyDriveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyDriveTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyDriveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
