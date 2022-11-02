import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import {ICredentials } from 'src/app/_interfaces/credentials';
import {IToken } from 'src/app/_interfaces/token';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public form: ICredentials = {
    email: '',
    password: ''
  }
  constructor(private authService:AuthService,private tokenService:TokenService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.form);
    this.authService.login(this.form).subscribe((data)=>{
      console.log(data.access_token);
      this.tokenService.saveToken(data.access_token)
    })

  }
}
