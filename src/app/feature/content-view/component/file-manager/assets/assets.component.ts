import { Component } from '@angular/core';
import { FileCardComponent } from '../file-card/file-card.component';

@Component({
  selector: 'file-assets',
  standalone: true,
  imports: [FileCardComponent],
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {

}
