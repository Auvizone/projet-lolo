import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { from } from 'rxjs';
import { PostMoviesService } from '../post-movies.service';
import { Genre, Movie } from '../type';


@Component({
  selector: 'app-movies-cards',
  templateUrl: './movies-cards.component.html',
  styleUrls: ['./movies-cards.component.css']
})


export class MoviesCardsComponent implements OnInit {

  // Pour mettre les movies //
  @Input() movie!: Movie;
  @Input() genre!: Genre;
  //@Output() genreUpdatedEvent: new EventEmitter<Movie>();

  movies: any;

  constructor(
    public postMoviesService: PostMoviesService,
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.postMoviesService.getAllMovies().subscribe((movie) => {
      this.movies = movie;
      console.log(this.movies)
    })
  }
}


