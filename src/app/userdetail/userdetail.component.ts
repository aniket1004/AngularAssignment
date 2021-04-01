import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  userData :any;
  constructor(private activatedRoute :ActivatedRoute)
  {
      this.activatedRoute.params.subscribe(data => {
        this.userData = data;
        console.log(this.userData);
      })
  }

  ngOnInit(): void {
  }

}
