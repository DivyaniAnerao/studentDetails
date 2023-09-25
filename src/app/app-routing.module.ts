import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { StudentDetailsComponent } from './student-details/student-details.component'
import { StudentComponent } from './student/student.component'
const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" }, 
{ path: 'home', component: StudentComponent },
{ path: 'details', component: StudentDetailsComponent }
]
@NgModule({
  declarations: [],
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
