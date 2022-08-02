import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  salary: number;
  bonus: number;
}


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];

  constructor() { }

  addEmployee(employee: Employee){
    // console.log(event);
    employee.bonus = employee.salary >= 1000 ? 0 : employee.bonus;
    this.employees.push(employee);
    // console.log(this.employees);
  }

}
