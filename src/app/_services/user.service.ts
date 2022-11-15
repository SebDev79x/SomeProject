import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAllUsers, ISingleUser } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/users'

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<IAllUsers>{
    return this.http.get<IAllUsers>(this.url)
  }
  getOneUser(userId:string | null):Observable<ISingleUser>{
    return this.http.get<ISingleUser>(this.url+'/'+userId)
  }
}

