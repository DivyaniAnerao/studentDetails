import { Component, Input, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

interface StudentData {
  SubmittedAnswerId: Number;
  ExerciseId: Number;
  Difficulty: Number;
  Subject: String;
  LearningObjective: String;
  Correct: Number;
  SubmitDateTime: Date;
  Progress: Number;
  UserId: Number;
  Domain: String;
  Percent?: Number;
  Color?: String;
}

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
})
export class StudentDetailsComponent implements OnInit {
  newdata: StudentData[] = [];
  total: number = 0;
  currentD = '2015-03-18';
  currentStatus = "All Student's Progress on " + this.currentD;

  @Input() data: any;
  constructor(private studentService: StudentService) {}
  getToday(): string {
    return new Date('2015-03-18').toISOString().split('T')[0];
  }
  showDetails(data: any = 0, newDate: any = 0) {
    if (data == 0) {
      this.currentStatus = "All Student's Progress on " + newDate;
    } else {
      this.currentStatus = data + "'s Progress on " + newDate;
    }
    this.studentService
      .getStudentDetails(data, newDate)
      .subscribe((result: any) => {
        this.newdata = [];
        result.map((data: StudentData) => {
          console.log(data);
          data.Color = '#4CAF50';
          if (Number(data.Progress) < 0) {
            data.Percent = Number(data.Progress) * -1;
            data.Color = 'red';
          } else {
            data.Percent = Number(data.Progress);
          }

          data.SubmitDateTime = new Date(data.SubmitDateTime);
          this.newdata.push(data);
        });

        this.total = this.newdata.length;
      });
  }

  onDateChnge() {
    console.log(this.currentD);
    if (this.data == 0) {
      this.currentStatus = "All Student's Progress on " + this.currentD;
    } else {
      this.currentStatus = this.data + "'s Progress on " + this.currentD;
    }
    this.showDetails(this.data, this.currentD);
  }
  ngOnChanges() {
    console.log(`Inside details ${this.data}`);
    this.showDetails(this.data, this.currentD);
  }
  ngOnInit(): void {}
}
