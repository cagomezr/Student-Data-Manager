import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { DataModelManagerService } from "../data-model-manager.service";
import { student ,course,credit } from "../data-model-classes";

@Component({
  selector: 'app-cart-component',
  templateUrl: './cart-component.component.html',
  styleUrls: ['./cart-component.component.css']
})
export class CartComponentComponent implements OnInit {
    possibleCourses: course[];
    matchedCourses: course[];
    selectedCourses: course[];
    currentStudentCart: student;
    selectPrereq: credit[];
    constructor(private router: Router, private m: DataModelManagerService, private route: ActivatedRoute) { }  
courseMatch(): void {
    console.log("dat");
    this.matchedCourses =[];
  // For each possible course...
    for(let pcourse of this.possibleCourses){
      
      if(pcourse.enrolTotal < 4){// Continue only if the enrol total is less than 4
          let requeriments = true;  
          if(pcourse.prerequisite.length>0){// Do we have a course history credit for this course?
            for(let prerec of pcourse.prerequisite){// If yes, continue
            if(!requeriments){// Look for a match of ALL prereqs...
                let intreqflag =false;
                for(let credit1 of this.currentStudentCart.credits){
                    if(prerec === credit1.courseCode){
                       intreqflag =true; 
                    }                    
                }      
                if(!intreqflag){
                    requeriments=false;
                }
            }      
}
            }
          if(requeriments){ // If we have ALL prereqs in the course history...
              // Recommended- clean up the time string by removing 
  // the seconds data (e.g. 13:30:00 becomes 13:30)
  // (the professor-provided grid and list components)
            // depend on this cleanup
              if((pcourse.classEnd!= undefined)&&(pcourse.classStart!= undefined)){
                  pcourse.classEnd=pcourse.classEnd.substr(0, pcourse.classEnd.length-3);
                  pcourse.classStart=pcourse.classStart.substr(0, pcourse.classStart.length-3);
              }
              this.matchedCourses.push(pcourse);// Add course to the "courses matched" collection
          }
      }
    }
}
courseSelect(courseAdded):void{
    if(this.selectedCourses== null){
        this.selectedCourses =[];
        this.selectedCourses.push(courseAdded);
    }else{
        let flag=false;
        let delindex = 0;
        for(let i =0;i<this.selectedCourses.length;i++){
            if(courseAdded._id === this.selectedCourses[i]._id ){
                flag=true;
                delindex =i;
            }
        }
        if(flag){
            this.selectedCourses.splice(delindex,1);
        }else{
            this.selectedCourses.push(courseAdded);
        }
    }    
}
isCourseSelected(course):Boolean{
    let sentinel=false;
    for(let i =0;i<this.selectedCourses.length;i++){
        if(this.selectedCourses[i]._id === course._id)
        {
            sentinel=true;
        }   
    }
    return sentinel;
}

taskSaveCart(): void {
    this.m.CartSystem= this.selectedCourses;
    //api call to saver cart
    this.m.CurrentStudent.coursesSaved = this.selectedCourses;
    this.m.cartSaveSys(this.m.CurrentStudent._id, this.selectedCourses).subscribe(u =>{ console.log(u)});
}
taskClear(): void {
    this.m.CartSystem =[];
    this.selectedCourses=[];
    //api call to clear cart;
    this.m.TimetableSaved=[];
    this.m.cartConfirmSys(this.m.CurrentStudent._id, this.m.TimetableSaved).subscribe(u =>{ console.log(u)});
}
taskConfirmTimetable(): void {
    this.m.TimetableSaved = this.selectedCourses;
    this.m.CartSystem =[];
    this.selectedCourses=[];
    this.m.cartConfirmSys(this.m.CurrentStudent._id, this.m.TimetableSaved).subscribe(u =>{ console.log(u)});
    //api call to save cart, update courses, and  user  ;
    this.m.CartSystem =[];
    this.selectedCourses=[];
    this.m.TimetableSaved=[];
}


  ngOnInit() {
      this.selectedCourses =[];
     this.currentStudentCart  = null;
      console.log(this.m.CurrentStudent);
      if( this.m.CurrentStudent == null){
          this.router.navigate(['students']);
      }else{
          console.log(this.m.CurrentStudent);
          this.currentStudentCart =   this.m.CurrentStudent;
          console.log(this.m.CurrentStudent);
         this.m.courseGetByPId(this.currentStudentCart.academicProgram).subscribe(u => { this.possibleCourses = u; this.selectedCourses = this.m.CurrentStudent.coursesSaved;this.courseMatch(); } );
      }
      
      
  }

}
