import { Component, ViewChild } from '@angular/core';
import { MovieService } from '../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private service: MovieService) {}
  // slider options #SAMY
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };


  products: any[] = [];
  
  // GETTING DATA FROM THE SERVER
  ngOnInit() {
    this.service.GetMovie()
    .subscribe(
      Response => {
        this.products = Response.json();
        console.log(this.products); // TEST #SAMY
      },
      error => {
        alert('Unexpected error is happend.');
        console.log(error);
      }
    )
  }

  // image for slider #SAMY
  slideOne = 'assets/icon/Slides.png';
  slideTwo = 'assets/icon/Slides2.png';
  slideThree = 'assets/icon/Slides3.png';
}
