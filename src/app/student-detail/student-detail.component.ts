import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
})
export class StudentDetailComponent implements OnInit {
  Student_form: FormGroup;
  Gender: string[] = ['Male', 'Female', 'Other'];
  classes: string[] = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.Student_form = this.formBuilder.group({
      fname: [''],
      lname: [''],
      email: [''],
      dob: [''],
      phone: [''],
      father: [''],
      mother: [''],
    });
  }
}
