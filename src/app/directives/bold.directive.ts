import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[bold]'
})
export class BoldDirective {
  public view: boolean = false;
  public randomValue: number = 0;
  public colors: string[] = ['red', 'green', 'blue', 'orange', 'gray']

  constructor(private element: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setFontWeight('bold');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setFontWeight('normal');
  }
  @HostListener('click') onClick() {
    this.getColor(0, 5);
    this.setColor(this.colors[this.randomValue]);
  }

  private getColor(min: number, max: number): number {
    this.randomValue = Math.floor(Math.random() * (max - min)) + min;
    return this.randomValue;
  }

  private setFontWeight(value: string) {
    this.renderer.setStyle(this.element.nativeElement, 'font-weight', value)
  }
  private setColor(value: string) {
    this.renderer.setStyle(this.element.nativeElement, 'color', value);
  }
}
