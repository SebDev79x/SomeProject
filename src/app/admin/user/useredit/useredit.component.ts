import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  constructor(private ActRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.ActRoute.params.subscribe((data)=>{
console.log(data);

    })
  }

}
