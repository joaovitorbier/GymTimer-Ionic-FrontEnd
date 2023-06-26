import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  constructor(private http: HttpClient){}
  
  public getUsuarioId(id: Number):Observable<Usuario>{

    const url = 'http://localhost:8080/usuarios/data/' + id;
    console.log("fazendo a requisição dos dados do usuário com essa url: " + url);
    return this.http.get<Usuario>(url);

  }

  public postUsuario(usuario: Usuario):Observable<any>{

    const url = 'http://localhost:8080/usuarios/novo'
    console.log("fazendo a requisição com essa url: " + url);
    console.log(JSON.stringify(usuario));
    return this.http.post(url,usuario);

  }

}
