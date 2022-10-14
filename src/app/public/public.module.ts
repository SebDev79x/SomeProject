import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MoviesComponent } from './movies/movies.component';
import { PlayoutComponent } from './playout/playout.component';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MoviesComponent,
    PlayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule

  ]
})
export class PublicModule { }
