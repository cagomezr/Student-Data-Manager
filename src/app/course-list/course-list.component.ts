import { Component, OnInit } from '@angular/core';
import { DataModelManagerService } from "../data-model-manager.service";
import { course } from "../data-model-classes";
import { catchError, tap } from "rxjs/operators";
@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  
  
  allCourses: course[];
  singleCourse: course;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    // Get all users
    // The collection of users is in the "data" property
    this.m.courseGetAll().subscribe(u => this.allCourses = u );
   
  }

}