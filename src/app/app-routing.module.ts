import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentTableComponent } from './student-table/student-table.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
const routes: Routes = [
  { path: '', component: StudentDetailComponent },
  { path: 'studentTable', component: StudentTableComponent },
  { path: 'editStudent', component: EditStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
