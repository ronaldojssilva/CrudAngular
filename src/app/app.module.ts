import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeNewComponent } from './employee-new/employee-new.component';
import { FormsModule } from '@angular/forms';
import { SalaryColorDirective } from './salary-color.directive';
import { EmployeeNewModalComponent } from './employee-new-modal/employee-new-modal.component';
import { AlertSuccessComponent } from './alert-success/alert-success.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeNewComponent,
    SalaryColorDirective,
    EmployeeNewModalComponent,
    AlertSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
