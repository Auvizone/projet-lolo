import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Subscription } from 'rxjs';
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
  routeSub: Subscription = new Subscription;
  
  constructor(
    public postMoviesService: PostMoviesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getData();
    this.getParams();
  }

  getParams() {
    this.route.queryParams.subscribe((params: any) => {
      console.log(params)
      this.postMoviesService.getGenre(params.genre).subscribe((data) => {
        console.log(data)
        this.movies = data
      })
    })
  }

  getData() {
    this.postMoviesService.getAllMovies().subscribe((movie) => {
      this.movies = movie;
      console.log(this.movies)
    })
  }
}


