import { Component } from '@angular/core';
import { PostMoviesService } from './post-movies.service';
import { Movie } from './type';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-movie';

  // on initialise l'attibut movies //
  movies: Movie[] = [];


  constructor(private PostMoviesService: PostMoviesService) {}

  ngOnInit(): void {
  // this.movies = this.PostMoviesService.getAllMovies;
}
}


