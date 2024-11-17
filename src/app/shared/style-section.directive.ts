import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[styleSection]',
  standalone: true
})
export class StyleSectionDirective  implements AfterViewInit {

  constructor(private elemRef: ElementRef, private render: Renderer2) {}

  ngAfterViewInit() {
    this.render.setStyle(this.elemRef.nativeElement, 'backgroundColor', '#fff');
    this.render.setStyle(this.elemRef.nativeElement, 'padding', '15px');
    this.render.setStyle(this.elemRef.nativeElement, 'borderRadius', '10px');
  }
}
