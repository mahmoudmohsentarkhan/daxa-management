import { Component, input, InputSignal, WritableSignal } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '@app/shared';

@Component({
  selector: 'file-card',
  standalone: true,
  imports: [SharedModule,MatIcon],
  templateUrl: './file-card.component.html',
  styleUrl: './file-card.component.scss'
})
export class FileCardComponent {
  data = input<{name:string,imgIcon:string, fileItems?:number, fileSize?:string}>()
}
