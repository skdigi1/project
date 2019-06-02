import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddComponent } from './add/add.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { AddteacherComponent } from './addteacher/addteacher.component';
import { AdddemoComponent } from './adddemo/adddemo.component';



const routes: Routes = [
  {path: '', redirectTo:'/home',pathMatch:'full'},
  {path: 'home', component: HomeComponent },
  {path: 'student', component: StudentComponent },
  {path: 'teacher', component: TeacherComponent },
  {path: 'add', component: AddComponent},
  {path: 'adddemo', component: AdddemoComponent },
  {path:'addstudent', component: AddstudentComponent},
  {path:'addteacher', component: AddteacherComponent}
]
;
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent,StudentComponent,TeacherComponent,AddComponent,AddstudentComponent,AddteacherComponent,AdddemoComponent]