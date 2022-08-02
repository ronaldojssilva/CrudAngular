import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[salaryColor]' //camelCase
})
export class SalaryColorDirective {

  @Input()
  salaryColor: string = '';

  @Input()
  x: any;

  constructor(private element: ElementRef) {
    setTimeout(()=> {
      const nativeElement: HTMLElement = this.element.nativeElement;
      const salary = parseFloat(this.salaryColor);
      nativeElement.style.color = salary > 20000 ? 'green' : 'red';
      console.log(this.x)
      // this.element.nativeElement.innerHTML = this.salaryColor;
    }, 2000)

  }

}
