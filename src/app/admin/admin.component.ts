import { Component, OnInit } from '@angular/core';
import { StudentdataService } from '../studentdata.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  studentdata = [];
  constructor(private studentService : StudentdataService) { }

  ngOnInit(): void 
  {
    this.studentdata = this.studentService.getStudentDetails();
  }

}
