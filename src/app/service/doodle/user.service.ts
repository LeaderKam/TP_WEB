import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserDetail } from './user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  link = 'http://localhost:8080/rest/hello/employee';

  private users: User[];

  constructor(private http: HttpClient, private router: Router) {
  }

  getUsers(): Observable<UserDetail[]> {
    return this.http.get<UserDetail[]>(this.link);
  }

  getUserById(id: string): Observable<User>{
    return this.http.get<User>(this.link + `/${id}`);
  }
  addUser(user: User): Observable<any>{
   return this.http.post(this.link, user);
  }

  deleteUser(id: string): Observable<any>{
    return this.http.delete(this.link + `/${id}`);
  }
}
