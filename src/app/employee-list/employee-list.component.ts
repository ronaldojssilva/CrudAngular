import { EmployeeNewModalComponent } from './../employee-new-modal/employee-new-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
// import Employe from '../employees';
import { EmployeeService, Employee } from '../employee.service';
import { EmployeeEditModalComponent } from './../employee-edit-modal/employee-edit-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee!: Employee;
  showMessageSuccess = false;
  employeeToEdit: Employee= {
    name: '',
    salary: 0,
    bonus: 0
  }

  @ViewChild(EmployeeNewModalComponent) // Pegar a referencia de um elemento
  employeeNewModal!: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) // Pegar a referencia de um elemento
  employeeEditModal!: EmployeeEditModalComponent;

  constructor(public  employeeService: EmployeeService) {
  }

  ngOnInit(): void {
  }

  openNewModal(){
    this.employeeNewModal.show();
  }

  openEditModal(employee: Employee){
    this.employeeToEdit = employee;
    this.employeeEditModal.show();
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee){
    console.log(employee);
  }
}
