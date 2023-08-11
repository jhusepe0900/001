import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAutoSum]'
})
export class AutoSumDirective {
  @Input() values: number[];
  @Input() total: number;

  constructor(private el: ElementRef) {}

  @HostListener('input') onInput(): void {
    this.total = this.values.reduce((sum, value) => sum + value, 0);
    this.el.nativeElement.innerText = this.total.toFixed(2);
  }
}
