import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Medidas } from '../model/medidas';

@Injectable({
  providedIn: 'root'
})
export class MedidasService {

  //apiUrl = 'http://localhost:8080/usuarios/data/';

  constructor(private http: HttpClient){ }

  public getMedidas():Observable<Medidas>{

    const url = 'http://localhost:8080/medidas/1';

    return this.http.get<Medidas>(url);

  }

  public adicionarMedidaAFichaCorpo(idFicha: Number, medidas: any):Observable<any>{

    const url = 'http://localhost:8080/medidas/fichacorpo/' + idFicha;

    console.log("ESTOU SALVANDO A MEDIDA USANDO O END POINT: " +url);

    console.log("O que estou salvando está no formado JSON assim:");

    console.log(JSON.stringify(medidas));

    return this.http.post(url, medidas);

  }

  public deletarMedida(idUsuario: Number, idMedida: Number):Observable<any>{

    const url = 'http://localhost:8080/medidas/'+ idMedida +'/usuario/' + idUsuario;

    console.log("Estou deletando usando essa URL: " + url);

    return this.http.delete(url);

  }


}
