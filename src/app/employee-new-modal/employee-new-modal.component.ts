import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.service';

@Component({
  selector: 'app-employee-new-modal',
  templateUrl: './employee-new-modal.component.html',
  styleUrls: ['./employee-new-modal.component.css']
})
export class EmployeeNewModalComponent implements OnInit {

  employee: Employee = {
    name: '',
    salary: 0,
    bonus: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

}
