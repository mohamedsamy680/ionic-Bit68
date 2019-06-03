import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = 'https://5bcce576cf2e850013874767.mockapi.io/task/categories';

  constructor(private http: Http) { }

  // GETTING DATA FROM THE SERVER
  GetMovie() {
    return this.http.get(this.url);
  }

  // GETTING DATA FROM THE SERVER BY ID
  GetMovieById(id: number) {
    return this.http.get(this.url + "/" + id);
  }

}
