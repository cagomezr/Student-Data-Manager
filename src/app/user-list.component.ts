import { Component, OnInit } from '@angular/core';

import { DataModelManagerService } from "./data-model-manager.service";
import { student } from "./data-model-classes";
import { catchError, tap } from "rxjs/operators";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // reqres.in web service data
  users: student[];
  user: student;

  constructor(private m: DataModelManagerService) { }

  ngOnInit() {

    // Get all users
    // The collection of users is in the "data" property
    this.m.studentGetAll().subscribe(u => this.users = u );
   
  }

}
