import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsAnalysisComponent } from './projects-analysis.component';

describe('ProjectsAnalysisComponent', () => {
  let component: ProjectsAnalysisComponent;
  let fixture: ComponentFixture<ProjectsAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsAnalysisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
