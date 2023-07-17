import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {

  private baseURL = 'http://localhost:3000/api/v1/login/';
  constructor(
    private httpClient: HttpClient
  ) { }
  loginUser(user: User): Observable<object>{
    let params = new HttpParams();
    params = params.set('user', user.userId);
    params = params.set('pwd', user.password);
    return this.httpClient.post(this.baseURL, params);
  }
}
