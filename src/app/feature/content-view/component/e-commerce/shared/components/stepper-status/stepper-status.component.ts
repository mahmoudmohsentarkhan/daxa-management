import { NgClass, NgStyle } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ProgressBarComponent } from "../../../../../../../shared/component/progress-bar/progress-bar.component";

@Component({
  selector: 'stepper-status',
  standalone: true,
  imports: [MatProgressBarModule, NgClass, NgClass, ProgressBarComponent],
  templateUrl: './stepper-status.component.html',
  styleUrl: './stepper-status.component.scss'
})
export class StepperStatusComponent {
  title = input<string>();
  progress = input<number>(0)
  labels= input<string[]>()
  sublabels = input<string[]>([])
  whiteBackGround=input<boolean>();
  postionActive= input<number>(1)
}
