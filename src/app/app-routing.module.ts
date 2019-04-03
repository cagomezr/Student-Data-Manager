import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from "./not-found.component";
import { HomeComponent } from "./home.component";
import { AboutComponent } from './about.component';
import { UserListComponent } from './user-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component'
import { HelpComponentComponent } from './help-component/help-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'students', component: UserListComponent },
  { path: 'courses', component: CourseListComponent },
  { path: 'cart', component: CartComponentComponent },
  { path: 'help', component: HelpComponentComponent },
  { path: 'students/detail/:id', component: StudentDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/*

import { UserEditComponent } from './user-edit.component';
import { UserDeleteComponent } from './user-delete.component';
import { UserCreateComponent } from './user-create.component';

{ path: 'users/create', component: UserCreateComponent },
  { path: 'users/edit/:id', component: UserEditComponent },
  { path: 'users/detail/:id', component: UserDetailComponent },
  { path: 'users/delete/:id', component: UserDeleteComponent },
 */