import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface UserData {
  message: string,
  success: boolean
}

interface LogStatus {
  status: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData(): Observable<UserData> {
    return this.http.get<UserData>('/api/database');
  }

  getName(): Observable<UserData> {
    return this.http.get<UserData>('/api/data');
  }

  isLoggedIn(): Observable<LogStatus> {
    return this.http.post<LogStatus>('/api/isloggedin');
  }

  logout(): Observable<LogStatus> {
    return this.http.get<LogStatus>('/api/logout');
  }
}
