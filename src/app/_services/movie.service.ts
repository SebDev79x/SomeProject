import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  url = 'http://localhost:3000/movies'
  /* API_KEY = 'f51d26c302e2a9dd30537d30f7be9750'
  API_LANGUAGE = 'fr-FR'
  TMDB_HORROR_MOVIES_URL = `https://api.themoviedb.org/3/discover/movie?api_key=
  ${this.API_KEY}&with_genres=27&language=${this.API_LANGUAGE}` */
  constructor(private http: HttpClient) { }
  /*  */
  getAllMovies() {
    return this.http.get(this.url)
  }
  /* getAllHorrorMovies() {
    return this.http.get(this.TMDB_HORROR_MOVIES_URL)
  } */
  getOneMovie() {

  }
  addMovie() {

  }
  updateMovie() {

  }
  trashMovie() {

  }
  untrashMovie() {

  }
  deleteMovie() {

  }
}
