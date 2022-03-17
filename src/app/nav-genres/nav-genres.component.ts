import { Component, OnInit } from '@angular/core';
import { Genre } from '../type';
import { PostMoviesService } from '../post-movies.service';

@Component({
  selector: 'app-nav-genres',
  templateUrl: './nav-genres.component.html',
  styleUrls: ['./nav-genres.component.css']
})
export class NavGenresComponent implements OnInit {

  genres: Genre[] = [];

  constructor(
    private PostMoviesService: PostMoviesService
  ) { }

  ngOnInit(): void {
    this.PostMoviesService.getAllGenres()
    .subscribe(genres => { 
      this.genres = genres;   
      console.log(this.genres)
  });
}
}
