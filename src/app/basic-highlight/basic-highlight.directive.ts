import { Directive, ElementRef } from "@angular/core";
//

@Directive({
    // use square brackets will recognize prop used without [] when added to element
    selector: '[appBasicHighlight]'
})


export class BasicHighlightDirective {
    constructor(private elementRef: ElementRef) { }


    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}