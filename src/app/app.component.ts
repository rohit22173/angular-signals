import { Component, computed, effect, Signal, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  movieName = '';
  moviesList = signal<string[]>([]);
  moviesCount = computed(()=> this.moviesList().length);

  constructor() {
    effect(() => console.log('Movie Added:', this.moviesList()));
  }
  
  addMovie() {
    // We can replacte following with mutate
    // this.moviesList.mutate(()=> this.moviesList().push(this.movieName));
    this.moviesList.update(()=> [...this.moviesList(), this.movieName]);
    this.resetMovieName();
  }

  clearMovieList() {
    this.moviesList.update(() => []);
  }

  resetMovieName() {
    this.movieName = '';
  }

}
