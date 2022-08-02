import { Component, OnInit } from '@angular/core';
// import Employe from '../employees';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  //employees_ = Employe.employees;

  constructor(public  employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
     return employee.salary > 20000 ? 'green': null;
  }

}
