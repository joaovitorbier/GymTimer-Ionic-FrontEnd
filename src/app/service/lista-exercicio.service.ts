import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { listasDeExercicios } from '../model/listas-de-exercicio';

@Injectable({
  providedIn: 'root'
})
export class ListaExercicioService {

  constructor(private http: HttpClient) { }

  lista: any ={
    nome:''
  }

  postLista(nome: String, idLista: Number):Observable<any>{

    const url = 'http://localhost:8080/lista/exercicios/registrar/'+idLista;

    this.lista.nome = nome;

    console.log("Registrando usando o endpoint: " + url);
    console.log(JSON.stringify(this.lista));

    return this.http.post(url,this.lista);


  }

}
