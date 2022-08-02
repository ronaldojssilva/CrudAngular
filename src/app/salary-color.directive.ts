import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[SalaryColor]' //camelCase
})
export class SalaryColorDirective {

  constructor(private element: ElementRef) {
    this.element.nativeElement.innerHTML = 'teste';
  }

}
