import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { FichaExercicio } from '../model/ficha-exercicio';

@Injectable({
  providedIn: 'root'
})
export class FichaExercicioService {


  constructor(private http: HttpClient) { }

  //FUNCIONA!
  getData(id: Number): Observable<any> {

    const url = 'http://localhost:8080/ficha/exercicios/usuario/' + id;

    return this.http.get<any>(url);

  }

  getFichaPorId(id: Number):Observable<any>{

    const url = 'http://localhost:8080/ficha/exercicios/' + id;

    return this.http.get<any>(url);

  }

  removerExercicioLista(idLista: Number, idExercicio: Number): Observable<any>{

    const url = 'http://localhost:8080/lista/exercicio/' + idLista+'/'+idExercicio+'/remover';

    console.log(url);
    
    return this.http.delete(url);

  }

  registrarFicha(ficha: any, id: Number): Observable<any>{

    const url = 'http://localhost:8080/ficha/exercicios/usuario/'+id;
    console.log("Registrando usando o endpoint: " + url)
    console.log(JSON.stringify(ficha));
    return this.http.post(url,ficha);

  }

}
