// Write classes or interfaces that describe the shape
// of the data to-and-from the web service

// For example...
/*
export class Product {
  id: number;
  name: string;
  // etc.
}
*/
// credit class
export class credit {
    courseCode: string;
    courseName: string;
    termCompleted: string;
    gradeEarned: string;
}
// course clas
export class course {
    _id:string;
    courseId: number;
    term: string;
    academicProgram: string;
    level: number;
    prerequisite: Array<string>;
    courseCode: string;
    section: string;
    termSectionId: number;
    enrolCapacity: number;
    enrolTotal: number;
    room: string;
    roomCapacity: number;
    classStart: string;
    classEnd: string;
    classMon: string;
    classTue: string;
    classWed: string;
    classThu: string;
    classFri: string;
    dateStart: Date;
    dateEnd: Date;
    professor: string;
}
// student class
export class student {
    _id:string;
    academicProgram: string;
    studentId: string;
    familyName: string;
    givenName: string;
    birthDate: Date;
    email: string;
    academicLevel: number;
    gpa: number;
    credits: Array<credit>;
    coursesSaved?: Array<course>;
    coursesConfirmed?: Array<course>;
}


