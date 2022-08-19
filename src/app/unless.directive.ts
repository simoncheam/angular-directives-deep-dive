import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // ! need appUnless needs to share same name as the prop binding
  @Input() set appUnless(condition: boolean) {

    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef)

    } else {
      this.vcRef.clear()

    }

  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
