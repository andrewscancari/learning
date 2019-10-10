import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from "rxjs/operators";
import { TokenService } from '../token/token.service';
import { UserService } from '../user/user.service';

const API_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient, private userSerivce: UserService) { }

  authenticate(userName: string, password: string): Observable<any> {
    return this.httpClient
      .post(`${API_URL}/user/login`, { userName, password }, {observe: 'response'})
      .pipe(tap(res => {
        const authToken = res.headers.get('x-access-token');
        this.userSerivce.setToken(authToken);
        console.log(`User ${userName} authenticated with token ${authToken}`);
      }));
  }
}
