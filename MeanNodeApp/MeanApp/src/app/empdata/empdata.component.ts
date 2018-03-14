import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

import { Employee } from '../../../models/employee.model';

@Component({
  selector: 'app-empdata',
  templateUrl: './empdata.component.html',
  styleUrls: ['./empdata.component.css']
})
export class EmpdataComponent {

  public updating = false;

  public employees: Employee[];

  public newEmployee = new Employee(0, '', '');

  public baseUrl = 'http://inblr-vm-2295.eu.uis.unisys.com:8080/';

  public server_status = 'Loading...';

  constructor(public http: Http) {
    http.get(this.baseUrl + 'api/Employees').subscribe(result => {
      if (result.ok) {
        this.employees = result.json() as Employee[];
      }
    }, error => {
      this.server_status = 'No employees';
      console.error(error);
    });
  }

  public addEmployee() {
    console.log(this.newEmployee.empName);
    this.http.post(this.baseUrl + 'api/Employees', this.newEmployee).subscribe(result => {
      if (result.ok) {
        // alert('employee added');
        this.newEmployee.empName = '';
        this.newEmployee.empDesig = '';
        if (this.employees != null) {
          this.employees.push(result.json() as Employee);
        } else {
          this.employees = [result.json() as Employee];
          // console.log(this.employees);
        }
      }
    }, error => console.error(error));
  }

  public deleteEmployee(emp: Employee) {
    console.log(emp._id);
    this.http.delete(this.baseUrl + 'api/Employees/' + emp._id).subscribe(result => {
      if (result.ok) {
        // alert('employee deleted');
        this.employees.splice(this.employees.indexOf(emp), 1);
        if (this.employees.length === 0) {
          this.employees = undefined;
          this.server_status = 'No employees';
        }
      }
    }, error => console.error(error));
  }

  public updateEmployees(newemployees: Employee[]) {
    this.updating = true;
    console.log('updating');
    this.http.put(this.baseUrl + 'api/Employees/', newemployees).subscribe(result => {
      if (result.ok) {
        this.http.get(this.baseUrl + 'api/Employees').subscribe(newres => {
          if (newres.ok) {
            // alert('Updated');
            this.employees = newres.json() as Employee[];
          }
          this.updating = false;
        }, error => console.error(error));
      } else {
        this.updating = false;
      }
    }, error => console.error(error));
  }

  public refreshEmployees() {
    this.http.get(this.baseUrl + 'api/Employees').subscribe(result => {
      if (result.ok) {
        this.employees = result.json() as Employee[];
      }
    }, error => console.error(error));
  }

}
