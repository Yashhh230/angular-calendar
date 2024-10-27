import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LOGIN } from '../constant/api';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  listView = new EventEmitter();
  constructor(public http: HttpClient) {}
  /**
   * this will a post method which will help to generate a token on api call of login
   * and if the user is valid it can get api call
   * @param obj this is the obj email:'' and password : ''
   * @returns this will return the token of the login
   */
  onLogin(obj: any): Observable<any> {
    return this.http.post(LOGIN, obj);
  }

  /**
   *
   * @param value this van set the value is token data and
   * store in localStorage
   */
  setLocalStorage(value: any) {
    localStorage.setItem('Login', JSON.stringify(value.data));
  }

  /**
   *
   * @returns this will return the token if localStorage have the token in it
   * it will get the data from the localStorage
   */
  getLocalStorgae() {
    let value = localStorage.getItem('Login');

    if (value) {
      value = JSON.parse(value);
    }
    return value;
  }

  forContact = new BehaviorSubject<any[]>([]);

  /**
   *
   * @param token this will generate the token
   */
  saveToken(token: string) {
    localStorage.setItem('Token', JSON.stringify(token));
  }
  // get value to localStorage
  getToken() {
    let Token = localStorage.getItem('Token');
    return Token ? JSON.parse(Token) : null;
  }
  //it will return true or false for login user
  log() {
    let Token = this.getToken();
    return Token ? true : false;
  }
}
