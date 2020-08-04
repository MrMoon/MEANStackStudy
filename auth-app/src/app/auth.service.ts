import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

export interface AuthRespone {
  success: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  //private loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
  private loggedInStatus = false;

  constructor(private http: HttpClient) { }

  setLoggedIn(state: boolean): void { this.loggedInStatus = state; }

  get isLoggedIn() : boolean { return this.loggedInStatus; }

  getUserDetails(email: string , password: string): Observable<AuthRespone> {
    return this.http.post<AuthRespone>('/api/login' , { email , password });
  }

  registerUser(name: string , email: string , password: string): Observable<AuthRespone> {
    return this.http.post<AuthRespone>('/api/register' , { name , email , password });
  }
}
