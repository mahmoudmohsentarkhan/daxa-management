import { Component } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { MatButton } from '@angular/material/button';
import { ButtonsListEmailComponent } from '../buttons-list-email/buttons-list-email.component';
import { AvatarWithInfoComponent, SharedModule } from '@app/shared';


@Component({
  selector: 'email-read',
  standalone: true,
  imports: [SharedModule, ButtonsListEmailComponent, AvatarWithInfoComponent, MatRipple, MatButton],
  templateUrl: './read.component.html',
  styleUrl: './read.component.scss'
})
export class ReadComponent {
  content:string = `<div _ngcontent-ng-c2869819792="" class="content"><span _ngcontent-ng-c2869819792="" class="title d-block fw-medium"> Hello Micheal Collins </span><p _ngcontent-ng-c2869819792=""> Pellentesque viverra lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet aliquam venenatis. Ac viverra interdum tortor enim. Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit mauris placerat nisi placerat. </p><span _ngcontent-ng-c2869819792="" class="title d-block fw-medium"> Limited-Time Offer: Daxa at a Special Price! </span><p _ngcontent-ng-c2869819792=""> Pellentesque viverra lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet aliquam venenatis. Ac viverra interdum tortor enim. Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit mauris placerat nisi placerat. </p><span _ngcontent-ng-c2869819792="" class="title d-block fw-medium"> Here's what you get: </span><ol _ngcontent-ng-c2869819792=""><li _ngcontent-ng-c2869819792="" class="text-body"> Mperdiet sit hendrerit tincidunt bibendum donec adipiscing. </li><li _ngcontent-ng-c2869819792="" class="text-body"> Tellus non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet aliquam venenatis. </li><li _ngcontent-ng-c2869819792="" class="text-body"> Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit mauris placerat nisi placerat. </li></ol><span _ngcontent-ng-c2869819792="" class="title d-block fw-medium"> How to Redeem </span><p _ngcontent-ng-c2869819792=""> Pellentesque viverra lorem malesuada nunc tristique sapien. Imperdiet sit hendrerit tincidunt bibendum donec adipiscing. Tellus non morbi nascetur cursus etiam facilisis mi. Dolor aliquam sed amet aliquam venenatis. Ac viverra interdum tortor enim. Molestie tincidunt ut consequat a urna tortor. Vitae velit ac nisl velit mauris placerat nisi placerat. </p><p _ngcontent-ng-c2869819792=""> Thank you for being a part of our community! </p><span _ngcontent-ng-c2869819792="" class="title d-block fw-medium"> Best regards, </span><p _ngcontent-ng-c2869819792=""> Robert Fairweather </p></div>`
}
