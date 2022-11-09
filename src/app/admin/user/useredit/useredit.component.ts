import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http:HttpClient) { }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('userId')
    console.log("userId",userId);
/*     this.http.get('http://localhost:3000/user/'+id).subscribe((data)=>{
      console.log(data);

    }) */
/*     this.activatedRoute.params.subscribe((data)=>{
console.log(data);
    }) */
  }

}
