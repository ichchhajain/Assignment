import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css'],
})
export class StudentTableComponent implements OnInit {
  displayedColumns: string[] = [
    'no',
    'name',
    'class',
    'age',
    'gender',
    'email',
    'mother',
    'father',
    'phone',
    'edit',
    'delete',
  ];
  dataSource;
  data = [
    {
      name: 'Shyam',
      class: '4th',
      age: 8,
      gender: 'Male',
      father: 'Ram Gupta',
      phone: 9990123456,
      email: 'shyam123@gmail.com',
      mother: 'Sita Gupta',
    },
    {
      name: 'Bob',
      class: '5th',
      age: 9,
      gender: 'Male',
      father: 'Suraj Sharma',
      phone: 996723456,
      email: 'bob@gmail.com',
      mother: 'Divya Sharma',
    },
    {
      name: 'Jai',
      class: '4th',
      age: 14,
      gender: 'Male',
      father: 'Anand Jain',
      phone: 9967898989,
      email: 'j@gmail.com',
      mother: 'Archana Jain',
    },
    {
      name: 'Radha',
      class: '6th',
      age: 11,
      gender: 'Female',
      father: 'Archit Jain',
      phone: 9090012345,
      email: 'Rad3@gmail.com',
      mother: 'ArcuJain',
    },
    {
      name: 'Juhi',
      class: '7th',
      age: 13,
      gender: 'Female',
      father: 'Ramu Gupta',
      phone: 9090123456,
      email: 'rat@gmail.com',
      mother: 'Ranu Gupta',
    },
    {
      name: 'Jaya',
      class: '8th',
      age: 14,
      gender: 'Female',
      father: 'Raja Kapoor',
      phone: 989123456,
      email: 'shyam123@gmail.com',
      mother: 'Ruhi Kappor',
    },
    {
      name: 'Shubham',
      class: '7th',
      age: 13,
      gender: 'Male',
      father: 'RupChand Gupta',
      phone: 9990129999,
      email: 'rup@gmail.com',
      mother: 'Rupa Gupta',
    },
    {
      name: 'Jay',
      class: '8th',
      age: 14,
      gender: 'Male',
      father: 'Ram Gupta',
      phone: 9990893456,
      email: 'ram123@gmail.com',
      mother: 'Ruhi Gupta',
    },
  ];
  constructor() {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }
  delete(index: number) {
    const data = this.dataSource.data;
    console.log(data);
    data.splice(+index, 1);
    this.dataSource.data = data;
  }
}
