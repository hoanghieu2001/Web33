import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  @Input('appHighLight') appHighlight = 'red'
  constructor(private el: ElementRef) {
    console.log('HighLightDriective');
    el.nativeElement.style.color = this.appHighlight
  }
  ngOnInit(): void {
    console.log('ngOnInit HighLightDirective', this.appHighlight);
    this.el.nativeElement.style.color = this.appHighlight;
  }
}
