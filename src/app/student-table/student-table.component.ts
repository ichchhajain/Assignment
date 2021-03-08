import { Component, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { StoreService } from '../store.service';

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

  constructor(private router: Router, private store: StoreService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.store.data);
  }
  delete(index: number) {
    const data = this.dataSource.data;
    console.log(data);
    data.splice(+index, 1);
    this.dataSource.data = data;
  }
  editDetail(index) {
    this.store.studentData = index;
    this.router.navigate(['/editStudent']);
  }
}
