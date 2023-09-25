import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  constructor(private studentService: StudentService) {}
  @Output() updatedEvent = new EventEmitter<number>();
  students: number[] = [];
  currentStudent: number = 0;
  activeStudent: Number = 0;
  public discoverClicked(student: number) {
    this.activeStudent = student;
    this.updatedEvent.emit(student);
  }
  ngOnInit() {
    this.studentService.getStudents().subscribe((result: any) => {
      result.map((data: number, index: number) => {
        this.students.push(data);
      });
    });
  }
}
