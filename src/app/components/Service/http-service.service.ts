import { Injectable } from '@angular/core';
import {Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Post} from '../Post';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  private url = 'https://jsonplaceholder.typicode.com/posts/';
  private urlSwapiPeople = 'https://swapi.co/api/people/';
  private urlSwapiFilms = 'https://swapi.co/api/films/';

  constructor(private http: HttpClient) {}

  getPerson(personID: number): Observable<object> {
    return this.http.get<object>(this.urlSwapiPeople + personID);
  }

  getFilm(FilmID: number): Observable<object> {
    return this.http.get<object>(this.urlSwapiFilms + FilmID);
  }

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>(this.url);
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>(this.url + id) ;
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const parm = new HttpParams().set('userId', userId + '');

    return this.http.get<Array<Post>>(this.url, {
      params: parm
    }) ;
    }

    addPost(post: Post): Observable<Post> {
      return this.http.post(this.url, post);
    }
    deletePost(id: number) {
      return this.http.delete<Post>(this.url + id);
    }

}
