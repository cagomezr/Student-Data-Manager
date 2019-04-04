import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "../data-model-manager.service";
import { course } from "../data-model-classes";
import { catchError, tap } from "rxjs/operators";

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  currCourse:course;
  constructor(private m: DataModelManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      
      this.m.courseGetById(id).subscribe(u => {this.currCourse = u;} );
  }

}
