import { Component, OnInit, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import { Modalable } from './../modal/modalable';

declare const $: any;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit, AfterViewInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  // //tem que expor esse onHide se eu quiser expor isso (o onHide do modulabe generico) no componente de lista
  // @Output()
  // override onHide: EventEmitter<any> = new EventEmitter();

  // @Output()
  // onShow: EventEmitter<any> = new EventEmitter();

  constructor(private employeeService: EmployeeService) {
    super();
  }

  ngOnInit(): void {
  }

  override ngAfterViewInit(): void{
    // Essa parte foi removida para modalable.ts
    //console.log(this.modalComponent);
    // essa parte tem a mesma função que configurar o evento na view (ver linha <modal (onHide)="fechou($event)" (onShow)="mostrou($event)"> no html)
    // this.modalComponent.onHide.subscribe(event => {
    //   console.log(event);
    //   this.onHide.emit(event);
    // });

    //como a parte acima foi removida para o a classe Modalable eu chamo o método no pai.
    super.ngAfterViewInit();
  }

  addEmployee(){
    //console.log('teste')
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  // fechou(event: any){
  //   //console.log(event);
  //   this.onHide.emit(event);
  // }

  // mostrou(event: any){
  //   //console.log(event);
  // }
}
