import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient){

  }
  title = 'detailsPortal';
  getStudents(){
    return this.http.get('http://localhost:5000/students')
  }

  getStudentDetails(studentId:number = 0,newDate:any = 0){
    return this.http.get('http://localhost:5000/students/details?id='+studentId+'&dates='+newDate)
  }
}
