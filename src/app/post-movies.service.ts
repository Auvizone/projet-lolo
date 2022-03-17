import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Genre, Movie } from './type';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class PostMoviesService {

  // URL absolue

  serverUrl = 'https://movie-api.benoithubert.me';

  // chemin relatif sur le serveur

  moviesPath = '/movies/';
  genresPath = '/genres/';
  moviesGenresPath = '/movies?genre=';

  constructor(
    private http: HttpClient
  ) { }  
  

  // Ici on get nos genres et nos films //

  getAllGenres(): Observable<Genre[]> {
    return this.http
    .get<Genre[]>(
      `${this.serverUrl}${this.genresPath}`
    );
  }

  getAllMovies(): Observable<Movie[]>{
    return this.http
    .get<Movie[]>(
    `${this.serverUrl}${this.moviesPath}`
    );
  }

  // by id 
  getMovieDetails(id: number): Observable<Movie>{
    return this.http
    .get<Movie> (
      `${this.serverUrl}${this.moviesPath}${id}`
    );
  }

  getGenre(genreName: string): Observable<Movie[]> {
    return this.http
    .get<Movie[]>(
      `${this.serverUrl}${this.moviesPath}?genre=${genreName}`
    )
  }
}
