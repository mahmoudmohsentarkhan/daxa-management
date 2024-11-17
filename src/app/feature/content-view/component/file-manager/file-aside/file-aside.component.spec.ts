import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAsideComponent } from './file-aside.component';

describe('FileAsideComponent', () => {
  let component: FileAsideComponent;
  let fixture: ComponentFixture<FileAsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileAsideComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
