import { Injectable } from '@angular/core';

export interface Employee{
  name: string;
  salary: number;
  bonus: number;
}


@Injectable({
  providedIn: 'root'  //devido a essa propriedade não precisa registrar o servico no app.module. fazer a importacao desse servico onde ele for usado.
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
