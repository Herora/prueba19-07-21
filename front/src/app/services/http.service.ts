import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const URL = environment.url;
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private token = "f1ca1955ffb5af0ac55a26e918af03a7ae87c3e14214c6f1495fac11a755b2a4";
  
  httpOptions: { headers; observe; } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'Authorization': 'Bearer f1ca1955ffb5af0ac55a26e918af03a7ae87c3e14214c6f1495fac11a755b2a4'
    }),
    observe: 'response'
  };
  constructor(private http: HttpClient) { };

  public login(email: string ){
    return this.http.get(`${URL}/public/v1/users?access-token=${this.token}&email=${email}`);
  };
  public CreateUser(form) {
    return this.http.post(`${URL}/public/v1/users?access-token=${this.token}`, form);
  }
  public getListUser() {
    return this.http.get(`${URL}/public/v1/users`);
  }
  public getListUserPage(value) {
    return this.http.get(`${value}`);
  }
}
