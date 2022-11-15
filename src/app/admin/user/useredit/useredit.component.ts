import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {
  user: IUser = {
    id: 0,
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    createdAt: '',
    deletedAt: null,
    updatedAt: ''
  }
  constructor(private activatedRoute: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    let userId = this.activatedRoute.snapshot.paramMap.get('userId')
    this.userService.getOneUser(userId).subscribe((data) => {
      this.user = data.data
    })

  }
  onSubmit(): void {
    console.log("ONSUBMIT",this.user);

  }
}
