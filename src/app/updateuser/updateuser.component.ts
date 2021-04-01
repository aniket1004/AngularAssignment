import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent implements OnInit {

  countries = [];
  userData : any;
  constructor(private activatedRoute : ActivatedRoute) 
  { 
    this.activatedRoute.params.subscribe(data => {
      console.log(data);
      this.userData = data;
    });
    this.countries = [
      {id: 1, name: "India"},
      {id: 2, name: "Nepal"},
      {id: 3, name: "USA"},
      {id: 4, name: "England"},
      {id: 5, name: "Italy"}
    ]
  }

  ngOnInit(): void {
  }

}
