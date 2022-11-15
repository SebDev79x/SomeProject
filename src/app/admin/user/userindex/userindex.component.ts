import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { IAllUsers, ISingleUser, IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';
@Component({
  selector: 'app-userindex',
  templateUrl: './userindex.component.html',
  styleUrls: ['./userindex.component.scss']
})
export class UserindexComponent implements OnInit {
  public usersList: IUser[] = []
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // Interceptor : juste avant que l'on sorte de notre applicatif Angular
    // Avant que ce soit envoyé au serveur (ici, l'api)
    // Interception de la requête (il va lui ajouter le token avant de tout renvoyer)
    this.userService.getAllUsers().subscribe((users) => {
      this.usersList = users.data
    })
  }
}
