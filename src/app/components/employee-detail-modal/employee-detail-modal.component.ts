import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/services/employee.service';
import { Modalable } from '../modal/modalable';

@Component({
  selector: 'employee-detail-modal',
  templateUrl: './employee-detail-modal.component.html',
  styleUrls: ['./employee-detail-modal.component.css']
})
export class EmployeeDetailModalComponent extends Modalable implements OnInit, AfterViewInit {

  @Input()
  employee!: Employee;

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

  override ngAfterViewInit(): void {
    super.ngAfterViewInit();
  }

}
