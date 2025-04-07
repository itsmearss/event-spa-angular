import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:5076/api/user');
  }

  getById(id: number): Observable<User> {
    return this.http.get<User>('http://localhost:5076/api/user/' + id);
  }

  create(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:5076/api/user', user);
  }

  update(id: number, user: User): Observable<User> {
    return this.http.put<User>('http://localhost:5076/api/user/' + id, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>('http://localhost:5076/api/user/' + id);
  }
}
