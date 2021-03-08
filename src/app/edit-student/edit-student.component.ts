import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css'],
})
export class EditStudentComponent implements OnInit {
  Student_form: FormGroup;
  Gender: string[] = ['Male', 'Female', 'Other'];
  classes = ['1', '2', '3', '4', '5', '6', '7', '8'];
  constructor(
    private formBuilder: FormBuilder,
    private store: StoreService,
    private router: Router
  ) {}
  get f() {
    return this.Student_form.controls;
  }
  ngOnInit(): void {
    this.Student_form = this.formBuilder.group({
      name: [''],
      gender: [''],
      email: [''],
      age: [''],
      phone: [''],
      class: [''],
      father: [''],
      mother: [''],
    });
    this.f.name.setValue(this.store.data[this.store.studentData].name);
    this.f.gender.setValue(this.store.data[this.store.studentData].gender);
    this.f.email.setValue(this.store.data[this.store.studentData].email);
    this.f.phone.setValue(this.store.data[this.store.studentData].phone);
    this.f.class.setValue(this.store.data[this.store.studentData].class);
    this.f.age.setValue(this.store.data[this.store.studentData].age);
    this.f.father.setValue(this.store.data[this.store.studentData].father);
    this.f.mother.setValue(this.store.data[this.store.studentData].mother);
  }
  updateStudentData() {
    console.log(this.Student_form.value);
    console.log(this.store.data[this.store.studentData]);
    this.store.data[this.store.studentData] = this.Student_form.value;
    this.router.navigate(['/studentTable']);
  }
}
