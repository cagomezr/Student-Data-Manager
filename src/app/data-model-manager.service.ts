import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";

// Updated...
import { Observable, of } from 'rxjs';
// New...
import { catchError, tap } from "rxjs/operators";

import { credit, course, student } from "./data-model-classes";
//import { Class1, Class2 } from "./data-model-classes";

@Injectable({
  providedIn: 'root'
})
export class DataModelManagerService {
  
  constructor(private http: HttpClient) { }

  // URL to the example reqres.in web service
  private urlReqres: string = "https://aqueous-lowlands-97253.herokuapp.com/api";
  //private urlReqres: string = "http://localhost:8080/api";

  // Edit the base URL string to the web service
  private url: string = "https://host.example/com/api";
    
 public CurrentStudent: student = null;  
 public CartSystem:course[] = [];   
public TimetableSaved:course[] =[];

  // Options object for POST and PUT requests
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Error handler, from the Angular docs
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Data service operations

    
  // Get all
  studentGetAll(): Observable<student[]> {
    return this.http.get<student[]>(`${this.urlReqres}/students`);
  }

  // Get one
  studentGetById(id: number): Observable<student> {
    return this.http.get<student>(`${this.urlReqres}/students/${id}`);
  }

  // Add new
  studentAdd(newItem: student): Observable<student> {
    return this.http.post<student>(this.urlReqres+'/students', newItem, this.httpOptions)
      .pipe(
        tap((newItem: student) => console.log(`Added item ${newItem.studentId}`)),
        catchError(this.handleError<student>('User add'))
      );
  }

  // Edit existing
  studentEdit(id: string, newItem: student): Observable<student> {
    return this.http.put<student>(`${this.urlReqres}/students/${id}`, newItem, this.httpOptions)
      .pipe(
        tap((newItem: student) => console.log(`Edited item ${newItem.studentId}`)),
        catchError(this.handleError<student>('User edit'))
      );
  }
  cartSaveSys(id: string, savedCart: course[]): Observable<any> {
    return this.http.put<student>(`${this.urlReqres}/students/${id}/cart/save`, savedCart, this.httpOptions)
      .pipe(
        tap((newItem: student) => console.log(`Edited item ${id}`)),
        catchError(this.handleError<student>('User edit'))
      );
  }
  cartConfirmSys(id: string, savedCart: course[]): Observable<any> {
    return this.http.put<student>(`${this.urlReqres}/students/${id}/cart/confirm`, savedCart, this.httpOptions)
      .pipe(
        tap((newItem: student) => console.log(`Edited item ${id}`)),
        catchError(this.handleError<student>('User edit'))
      );
  }    

 
    //course functions
  // Get all
  courseGetAll(): Observable<course[]> {
    return this.http.get<course[]>(`${this.urlReqres}/courses`);
  }

  // Get one
  courseGetById(id: number): Observable<course> {
    return this.http.get<course>(`${this.urlReqres}/courses/${id}`);
  }
  // Get listby program
  courseGetByPId(id: string): Observable<course[]> {
    return this.http.get<course[]>(`${this.urlReqres}/courses/pid/${id}`);
  }    

  
    

}
