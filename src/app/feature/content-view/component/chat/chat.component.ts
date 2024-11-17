import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { AvatarWithInfoComponent, ChatMessageComponent, SearchComponent, SharedModule } from '@app/shared';
@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    SharedModule,
    ChatMessageComponent,
    SearchComponent,
    AvatarWithInfoComponent,
    MatIconModule,
    MatRippleModule,
    MatInputModule,
    MatTabsModule,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
}
