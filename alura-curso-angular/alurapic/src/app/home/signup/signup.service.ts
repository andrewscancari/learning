
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewUser } from './user';
import { environment } from 'src/environments/environment.prod';

const API_URL = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class SignUpService {
  constructor(private httpClient: HttpClient) {}

  checkUserNameTaken(userName: string): Observable<boolean> {
    return this.httpClient.get(`${API_URL}/user/exists/${userName}`) as Observable<boolean>;
  }

  signup(newUser: NewUser): Observable<any> {
    return this.httpClient.post(`${API_URL}/user/signup`, newUser) as Observable<any>;
  }
}
