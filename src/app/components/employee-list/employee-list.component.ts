import { EmployeeNewModalComponent } from '../employee-new-modal/employee-new-modal.component';
import { Component, OnInit, ViewChild } from '@angular/core';
// import Employe from '../employees';
import { EmployeeService, Employee } from '../../services/employee.service';
import { EmployeeEditModalComponent } from './../employee-edit-modal/employee-edit-modal.component';
import { EmployeeDeleteModalComponent } from './../employee-delete-modal/employee-delete-modal.component';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employee: Employee= {
    name: '',
    salary: 0,
    bonus: 0
  };
  showMessageSuccess = false;
  employeeToEdit: Employee= {
    name: '',
    salary: 0,
    bonus: 0
  };
  employeeToDelete: Employee= {
    name: '',
    salary: 0,
    bonus: 0
  };

  @ViewChild(EmployeeNewModalComponent) // Pegar a referencia de um elemento
  employeeNewModal!: EmployeeNewModalComponent;

  @ViewChild(EmployeeEditModalComponent) // Pegar a referencia de um elemento
  employeeEditModal!: EmployeeEditModalComponent;

  @ViewChild(EmployeeDeleteModalComponent) // Pegar a referencia de um elemento
  employeeDeleteModal!: EmployeeDeleteModalComponent;

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

  openDestroyModal(employee: Employee){
    this.employeeToEdit = employee;
    this.employeeDeleteModal.show();
  }

  onNewEmployee(employee: Employee){
    this.employee = employee;
    this.showMessageSuccess = true;
  }

  onEditEmployee(employee: Employee){
    console.log(employee);
  }

  onDestroyEmployee(employee: Employee){
    console.log(employee);
  }
}
