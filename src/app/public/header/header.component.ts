import { Component, OnInit } from '@angular/core';
import {
  faHouse,
  faTheaterMasks, faEnvelope, faFilm, faHouseUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public faHouse = faHouse;
  public faTheaterMasks = faTheaterMasks;
  public faEnvelope = faEnvelope;
  public faFilm = faFilm;
  public faHouseUser = faHouseUser;

/*   public faUser = faUser;
 */  constructor() { }

  ngOnInit(): void {
  }

}
