import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'buttons-list-email',
  standalone: true,
  imports: [MatIconModule, MatRipple],
  templateUrl: './buttons-list-email.component.html',
  styleUrl: './buttons-list-email.component.scss'
})
export class ButtonsListEmailComponent {

}
