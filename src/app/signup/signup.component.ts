import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  countries = [];
  name = '';
  email = '';
  dob :Date;
  country = '';
  image_path : File;
  invalidName : boolean = false;
  invalidEmail : boolean = false;
  invalidDOB : boolean = false;
  invalidCountry : boolean = false;
  invalidImage : boolean = false;


  constructor(private router : Router) { 
    this.countries = [
      {id: 1, name: "India"},
      {id: 2, name: "Nepal"},
      {id: 3, name: "USA"},
      {id: 4, name: "England"},
      {id: 5, name: "Italy"}
    ]
  }
  isEmail(search)
  {
    var searchfind:boolean;

    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

    searchfind = regexp.test(search);
    console.log(searchfind);
    return searchfind;
  }
  onSubmit(fData : NgForm)
  {
      if (fData.value.Name == "")
      {
        this.invalidName = true;
      }
      else
      {
        this.invalidName = false;
      }
      if (fData.value.Email == "")
      {
        this.invalidEmail = true;
      }
      else
      {
        this.invalidEmail = false;
      }
      if (this.isEmail(fData.value.Email))
      {
        this.invalidEmail = false;
      }
      else
      {
        this.invalidEmail = true;
      }
      if (fData.value.DOB == "")
      {
        this.invalidDOB = true;
      }
      else
      {
        this.invalidDOB = false;
      }
      if (fData.value.country == "")
      {
        this.invalidCountry = true;
      }
      else
      {
        this.invalidCountry = false;
      }
      if (this.image_path == undefined)
      {
        this.invalidImage = true;
      }
      else
      {
        this.invalidImage = false;
      }
      if (fData.value.Name == "" || fData.value.Email =="" || fData.value.DOB == "" || fData.value.country == "" || this.image_path == undefined || !(this.isEmail(fData.value.Email)))
      {
          return false;
      }
      else
      {
        fData.value['image'] = this.image_path.name;
        this.router.navigate(['/userdetails',fData.value]);
      }
      
      
  }
  processFile(imageInput :any)
  { 
    this.image_path = imageInput.files[0];
  }
  ngOnInit(): void {
  }

}
