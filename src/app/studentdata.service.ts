import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentdataService {
  student_data = [
    {
      'id' : 1,
      'name' : 'Aniket Dhole',
      'email' : 'aniketdhole1004@gmail.com',
      'Age' : 20,
      'SignedUpDate' : '31-03-2021'
    },
    {
      'id' : 2,
      'name' : 'Swapnil Adhav',
      'email' : 'swapniladhav560@gmail.com',
      'Age' : 21,
      'SignedUpDate' : '30-03-2021'
    },
    {
      'id' : 3,
      'name' : 'Devarshi Pimpale',
      'email' : 'devarshipimpale@gmail.com',
      'Age' : 20,
      'SignedUpDate' : '13-04-2021'
    }
  ]

  constructor() { }

  getStudentDetails()
  {
    return this.student_data;
  }

}
