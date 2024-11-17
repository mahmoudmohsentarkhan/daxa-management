import { Component } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { ChatMessageComponent, SharedModule } from 'app/index/shared/shared-index';

@Component({
  selector: 'chat-projects-user',
  standalone: true,
  imports: [SharedModule, MatInputModule, MatIconModule, ChatMessageComponent],
  templateUrl: './chat-projects-user.component.html',
  styleUrl: './chat-projects-user.component.scss'
})
export class ChatProjectsUserComponent {

}
