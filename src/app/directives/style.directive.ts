import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";
import { reduce } from "rxjs";


@Directive({
    selector: '[appStyle]'
})

export class StyleDirective implements OnInit {
    constructor(
        private elRef: ElementRef,
        private render: Renderer2
        ) {}

        ngOnInit(): void {
            this.changeColor();
        }

        public changeColor() {
            this.render.setStyle(this.elRef.nativeElement, 'color', 'green');
        }
}