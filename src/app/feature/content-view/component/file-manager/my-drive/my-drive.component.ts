import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';
import { FileCardComponent } from '../file-card/file-card.component';
import { MyDriveTableComponent } from './my-drive-table/my-drive-table.component';

@Component({
  selector: 'my-drive',
  standalone: true,
  imports: [SharedModule,FileCardComponent, MyDriveTableComponent],
  templateUrl: './my-drive.component.html',
  styleUrl: './my-drive.component.scss'
})
export class MyDriveComponent {

}
