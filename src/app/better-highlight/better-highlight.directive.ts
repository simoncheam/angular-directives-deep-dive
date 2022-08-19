import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  // ! we can bind to any property
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    //  this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  // ! triggers on mouseover event

  // targets 'mouseenter' event on DOM
  @HostListener('mouseenter') mouseover(event: Event) {

    // want to change background color
    //! commented out because we are using @HostBinding
    //    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.highlightColor;

  }

  @HostListener('mouseleave') mouseleave(event: Event) {

    // want to change background color

    //! commented out because we are using @HostBinding
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent')

    this.backgroundColor = this.defaultColor;
  }

}
