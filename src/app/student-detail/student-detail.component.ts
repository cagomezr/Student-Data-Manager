import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "../data-model-manager.service";
import { student } from "../data-model-classes";
import { catchError, tap } from "rxjs/operators";

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

currStudent:student;
  constructor(private m: DataModelManagerService, private route: ActivatedRoute) { }

  ngOnInit() {
      const id = this.route.snapshot.params['id'];
      
      this.m.studentGetById(id).subscribe(u => {this.currStudent = u; this.m.CurrentStudent = u;} );
  }

}
