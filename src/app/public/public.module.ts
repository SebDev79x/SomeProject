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
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { library as legacyLibrary } from '@fortawesome/fontawesome-svg-core';
@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    MoviesComponent,
    PlayoutComponent,
    HeaderComponent,

  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    FontAwesomeModule


  ]
})
export class PublicModule {


}
