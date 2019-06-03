import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  movies: any[] = [];

  constructor(private service: MovieService) { }

  // GETTING DATA FROM THE SERVER
  ngOnInit() {
    this.service.GetMovie()
      .subscribe(
       Response => {
        this.movies = Response.json();
        console.log(this.movies);
      },
       error => {
        alert('Unexpected error is happend.');
        console.log(error);
      });

  }

}
