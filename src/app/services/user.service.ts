import { Injectable } from '@angular/core';
import { user } from '../intercefes/user';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  readonly URL_API = 'https://jsonplaceholder.typicode.com/users';

  private user: Array<user> = [];
  public user$ = new BehaviorSubject(this.user);

  constructor(private http: HttpClient) {
    this.user$.subscribe(console.log);
  }

  setUser(value) {
    if (Array.isArray(value)) this.user = value;
    else this.user.push(value);
    this.user$.next(this.user);
  }
  //sin corchetes
  //return this.http.get<user[]>(this.URL_API).pipe(

  getUserList(): Observable<user[]> {
    return this.http.get<user[]>(this.URL_API).pipe(
      tap((data) => this.setUser(data)),
      catchError(this.handleError<user[]>('Get Users', []))
    );
  }

  getUser(id): Observable<user> {
    return this.http.get<user>(this.URL_API + '/' + id).pipe(
      tap((user) => this.setUser(user)),
      catchError(this.handleError<user>('user  id=${id}`'))
    );
  }

  deleteUser(id): Observable<user> {
    return this.http
      .delete<user>(this.URL_API + '/' + id, this.httpOptions)
      .pipe(
        tap((_) => {
          const index = this.user.map((p) => p.id).indexOf(id);
          this.user.splice(index, 1);
          this.setUser(this.user);
        }),
        catchError(this.handleError<user>('Delete user'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
