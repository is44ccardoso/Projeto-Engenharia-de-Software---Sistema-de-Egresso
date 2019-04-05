import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userUrl = environment.host + 'api/user';
  constructor(private http: HttpClient) { }

  getUser(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  public salvar(user: User): Observable<User> {
    return this.http.post<User>(this.userUrl, user)
  }
}
