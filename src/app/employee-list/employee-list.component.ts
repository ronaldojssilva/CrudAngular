import { EmployeeNewModalComponent } from './../employee-new-modal/employee-new-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
// import Employe from '../employees';
import { EmployeeService, Employee } from '../employee.service';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee!: Employee;
  showMessageSuccess = false;

  @ViewChild(EmployeeNewModalComponent) // Pegar a referencia de um elemento
  employeeNewModal!: EmployeeNewModalComponent;

  constructor(public  employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  openNewModal(){
    this.employeeNewModal.show();
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }
}
