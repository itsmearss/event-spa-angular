import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:5076/api/auth/';

const httpOptions = {
  headers: { 'Content-Type': 'application/json' },
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'login',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(
    fullname: string,
    username: string,
    password: string,
    roleId: number = 1
  ): Observable<any> {
    return this.http.post(
      AUTH_API + 'register',
      {
        fullname,
        username,
        password,
        roleId,
      },
      httpOptions
    );
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', {}, httpOptions);
  }
}
