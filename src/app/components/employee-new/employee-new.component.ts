import { Component, OnInit } from '@angular/core';
import { bindCallback } from 'rxjs';
// import Employe from '../employees';
import { Employee, EmployeeService } from './../../services/employee.service';

@Component({
  selector: 'employee-new',
  templateUrl: './employee-new.component.html',
  styleUrls: ['./employee-new.component.css']
})
export class EmployeeNewComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }
  // employees= Employe.employees;

  constructor(private employeeService: EmployeeService) {
    // setTimeout( () => {
    //   this.name = 'school of net'
    // }, 3000);
  }

  ngOnInit(): void {
  }

  addEmployee(event: Event){
    const copy = Object.assign({}, this.employee);
    this.employeeService.addEmployee(copy);
    // // console.log(event);
    // const bonus = this.salary >= 1000 ? 0 : this.bonus;
    // this.employeeService.employees.push({name: this.name, salary: this.salary, bonus: bonus});
    // // console.log(this.employees);
  }

}
