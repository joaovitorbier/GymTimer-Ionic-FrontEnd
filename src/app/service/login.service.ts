import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email: String, senha: String):Observable<any>{

    const url = `http://localhost:8080/login/${email}/${senha}`;

    console.log("fazendo a requisição com essa url: " +url);

    return this.http.get(url);

  }

}
