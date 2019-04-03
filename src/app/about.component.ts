import { Component, OnInit } from '@angular/core';

import { DataModelManagerService } from "./data-model-manager.service";
import { student } from "./data-model-classes";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  // reqres.in web service data
  users: student[];
  user: student;

  constructor(private m: DataModelManagerService) { 

    // Create a new empty user to suppress console error messages
    // while we are waiting for data from the web service
    //this.user = new ReqresUser();
  }

  ngOnInit() {

    // Get all users
    // The collection of users is in the "data" property
    this.m.studentGetAll().subscribe(u => this.users );

    // Get one user, with identifier 5
    // The user is in the "data" property
    this.m.studentGetById(5).subscribe(u => this.user);
  }

}
