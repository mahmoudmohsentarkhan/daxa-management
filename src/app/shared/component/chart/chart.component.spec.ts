import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppChartComponent } from './chart.component';

describe('StatsChartComponent', () => {
  let component: AppChartComponent;
  let fixture: ComponentFixture<AppChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
