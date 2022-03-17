import { Component, Input, OnInit } from '@angular/core';
import { Genre, Movie } from '../type';
import { PostMoviesService } from '../post-movies.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {
  [x: string]: any;
  @Input() genre!: Genre["name"];

  movies: Movie[] = [];
  
  constructor(
    private postMoviesService: PostMoviesService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.postMoviesService.getAllMovies()
      .subscribe(movies => {
        this.movies = movies;
      }
      );
      console.log('test')
    }

  
    getByGenre(genre: string){
      const NavGenresComponent = String(this.route.snapshot.paramMap.get('genre'));
      this.postMoviesService.getGenre(genre)
      .subscribe(movies => {
        this.movies = movies;
      });
    }
  }
