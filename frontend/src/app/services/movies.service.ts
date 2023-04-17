import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/Movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  baseUrl: string = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies`);
  }

  getMovie(imdbid: string): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movies/${imdbid}`);
  }

  searchMovies(title: string): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${this.baseUrl}/movies/search/${title}`);
  }
}
