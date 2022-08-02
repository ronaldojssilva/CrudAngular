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

  @ViewChild(EmployeeNewModalComponent) // Pegar a referencia de um elemento
  employeeNewModal!: EmployeeNewModalComponent;

  constructor(public  employeeService: EmployeeService) {
    console.log(this.employeeNewModal);

    setTimeout(()=> {
       console.log(this.employeeNewModal);
       this.employeeNewModal.show();
    }, 2000)


  }

  ngOnInit(): void {
  }

  getSalaryColor(employee: Employee){
     return employee.salary > 20000 ? 'green': null;
  }

}
