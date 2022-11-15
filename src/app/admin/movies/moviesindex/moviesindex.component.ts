import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/_services/movie.service';

@Component({
  selector: 'app-moviesindex',
  templateUrl: './moviesindex.component.html',
  styleUrls: ['./moviesindex.component.scss']
})
export class MoviesindexComponent implements OnInit {
  moviesList:any[] = []
  constructor(private movieService : MovieService) { }

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((data:any)=>{
      console.log("MOVIES",data);
this.moviesList = data.data
    })
  }

}
