import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../type';
import { PostMoviesService } from '../post-movies.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie?: Movie;

  constructor(
    private route: ActivatedRoute,
    private postMoviesService: PostMoviesService
    ) {}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postMoviesService.getMovieDetails(id)
      .subscribe(movie => {
        this.movie = movie;
      });
  }  


}