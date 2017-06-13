import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlightHost]'
})
export class HighlightDirective {
  @Input('highlightHost') highlightColor: string
  constructor(private _el: ElementRef) {

  }
  @HostListener('mouseenter')
  onmouseenter() {
    this.highlight(this.highlightColor)
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.highlight(null)
  }
  private highlight(color: string) {
    this._el.nativeElement.style.backgroundColor = color;
  }

}
