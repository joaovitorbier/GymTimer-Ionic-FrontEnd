import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercicioService {

  constructor(private http: HttpClient) {}

  public getLista(idLista: Number):Observable<any>{

    const url = 'http://localhost:8080/lista/exercicios/' + idLista;

    console.log("Fazendo a requisição com essa URL: "+ url);

    return this.http.get(url);

  }

  public postExercicioNaLista(idLista: Number, exercicio: any):Observable<any>{

    const url = 'http://localhost:8080/lista/exercicios/'+idLista;

    console.log("Fazendo a requisição com essa URL: "+ url);

    console.log(JSON.stringify(exercicio));

    return this.http.post(url,exercicio);

  }

  public removerExercicioDaLista(idLista: Number, idExercicio: Number):Observable<any>{

    const url = 'http://localhost:8080/lista/exercicios/remover/lista/'+ idLista +'/exercicio/' + idExercicio;

    console.log("Fazendo a requisição com essa URL: "+ url);

    return this.http.delete(url);

  }

}
