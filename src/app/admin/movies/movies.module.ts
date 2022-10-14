import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesindexComponent } from './moviesindex/moviesindex.component';
import { MoviesaddComponent } from './moviesadd/moviesadd.component';
import { MoviesdeleteComponent } from './moviesdelete/moviesdelete.component';
import { MovieseditComponent } from './moviesedit/moviesedit.component';


@NgModule({
  declarations: [
    MoviesindexComponent,
    MoviesaddComponent,
    MoviesdeleteComponent,
    MovieseditComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
