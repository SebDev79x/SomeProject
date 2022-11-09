import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrls: ['./userindex.component.scss']
})
export class UserindexComponent implements OnInit {
public usersList:any[]=[]
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Interceptor : juste avant que l'on sorte de notre applicatif Angular
    // Avant que ce soit envoyé au serveur (ici, l'api)
    // Interception de la requête (il va lui ajouter le token avant de tout renvoyer)
    this.http.get('http://localhost:3000/users').subscribe(
      (users:any) => {
        console.log("data",users)

      console.log("data.usersList",users.list)
      this.usersList = users.list
      console.log("userlist", this.usersList);

      }
    )
  }

}
