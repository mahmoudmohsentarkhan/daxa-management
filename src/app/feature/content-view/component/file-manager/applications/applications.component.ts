import { Component } from '@angular/core';
import { SharedModule } from '@app/shared';
import { MyDriveTableComponent } from '../my-drive/my-drive-table/my-drive-table.component';

@Component({
  selector: 'file-applications',
  standalone: true,
  imports: [MyDriveTableComponent, SharedModule],
  templateUrl: './applications.component.html',
  styleUrl: './applications.component.scss'
})
export class ApplicationsComponent {

}
