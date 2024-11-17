import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'title-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title-section.component.html',
  styleUrl: './title-section.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class TitleSectionComponent {
  title = input.required<string>()
  subtitle = input<string>()
  content = input<string>()
  statistics =  input<string>()
  hasContent:WritableSignal<boolean> = signal(false);

  @ContentChild('altContent')  set altContent(ele:ElementRef){
    if(ele){
      this.hasContent.set(true)
    }
  };

}
