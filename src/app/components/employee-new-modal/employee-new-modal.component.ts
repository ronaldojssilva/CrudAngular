import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Employee, EmployeeService } from '../../services/employee.service';
import Modalable from './../modal/modalable';

declare const $: any;

@Component({
  selector: 'employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent extends Modalable implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  @Output()
  onSubmit: EventEmitter<Employee> = new EventEmitter<Employee>();

  constructor(private employeeService: EmployeeService) {
    super();
  }

  ngOnInit(): void {
  }

  addEmployee(){
    console.log('teste')
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    this.onSubmit.emit(copy);
    this.hide();
  }

  fechou(event: any){
    console.log(event);
  }

  mostrou(event: any){
    console.log(event);
  }
}
