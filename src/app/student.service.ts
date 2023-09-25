import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient){

  }
  title = 'detailsPortal';
  getStudents(){
    return this.http.get(environment.apiUrl+'/students')
  }

  getStudentDetails(studentId:number = 0,newDate:any = 0){
    return this.http.get(environment.apiUrl+'/students/details?id='+studentId+'&dates='+newDate)
  }
}
