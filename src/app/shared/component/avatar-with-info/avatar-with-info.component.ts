import { Component, input } from '@angular/core';

@Component({
  selector: 'avatar-with-info',
  standalone: true,
  imports: [],
  templateUrl: './avatar-with-info.component.html',
  styleUrl: './avatar-with-info.component.scss'
})
export class AvatarWithInfoComponent {
  data = input<{img?:string,title?:string,subtitle?:string}>()
}
