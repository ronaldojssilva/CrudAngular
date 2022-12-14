import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDeleteModalComponent } from './employee-delete-modal.component';

describe('EmployeeDeleteModalComponent', () => {
  let component: EmployeeDeleteModalComponent;
  let fixture: ComponentFixture<EmployeeDeleteModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeDeleteModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeDeleteModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
