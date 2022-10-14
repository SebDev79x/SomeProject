import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesaddComponent } from './moviesadd/moviesadd.component';
import { MoviesdeleteComponent } from './moviesdelete/moviesdelete.component';
import { MovieseditComponent } from './moviesedit/moviesedit.component';
import { MoviesindexComponent } from './moviesindex/moviesindex.component';

const routes: Routes = [
  {path:'',component:MoviesindexComponent},
  {path:'edit/:id',component:MovieseditComponent},
  {path:'add',component:MoviesaddComponent},
  {path:'delete/:id',component:MoviesdeleteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
