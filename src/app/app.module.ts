import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about.component';
import { HomeComponent } from './home.component';
import { HeaderNavComponent } from './header-nav.component';
import { NotFoundComponent } from './not-found.component';
import { FormElementsComponent } from './form-elements.component';
import { UserListComponent } from './user-list.component';
import { CourseListComponent } from './course-list/course-list.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HelpComponentComponent } from './help-component/help-component.component';
import { CartComponentComponent } from './cart-component/cart-component.component';
import { CartSelectedGridComponent } from './cart-selected-grid/cart-selected-grid.component';
import { CartSelectedCellComponent } from './cart-selected-cell/cart-selected-cell.component';
import { CartSelectedListComponent } from './cart-selected-list/cart-selected-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderNavComponent,
    NotFoundComponent,
    FormElementsComponent,
    UserListComponent,
    CourseListComponent,
    StudentDetailComponent,
    HelpComponentComponent,
    CartComponentComponent,
    CartSelectedGridComponent,
    CartSelectedCellComponent,
    CartSelectedListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
