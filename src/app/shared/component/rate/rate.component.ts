import { Component, input } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faStar as faStarR} from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarS } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rate',
  standalone: true,
  imports: [FaIconComponent],
  templateUrl: './rate.component.html',
  styleUrl: './rate.component.scss'
})
export class RateComponent {
  faStarR = faStarR;
  faStarS = faStarS;
  rate = input.required<number>()
}
