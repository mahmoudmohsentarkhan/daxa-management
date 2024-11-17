import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgxEditorModule } from 'ngx-editor';
import { Editor } from 'ngx-editor';
import { MatButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { SharedModule } from '@app/shared';
import { ButtonsListEmailComponent } from '../buttons-list-email/buttons-list-email.component';


@Component({
  selector: 'email-compose',
  standalone: true,
  imports: [
    SharedModule,
    FormsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ButtonsListEmailComponent,
    NgxEditorModule,
    MatRipple,
    MatButton,
    MatIcon
],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent  implements OnInit, OnDestroy {
  editor!: Editor;
  html = '';

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
