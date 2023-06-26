import { Injectable } from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable, tap} from 'rxjs'
import { FichaCorpos } from '../model/ficha-corpos';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class FichaCorpoService {

  constructor(private http: HttpClient) {}

  //PEGA TODAS AS FICHAS DE UM ID DE USUARIO!
  public getFichas(id: Number):Observable<any>{

    const url = 'http://localhost:8080/ficha/corpo/usuario/' + id;

    return this.http.get<any>(url);
  }

  public getFichaPorId(id:Number):Observable<any>{

    const url = 'http://localhost:8080/ficha/corpo/' + id;

    return this.http.get<any>(url);

  }

  //DEU PROBLEMA LÁ NA API
  public deleteFicha(id: Number){

    const url = 'http://localhost:8080/'+id;

    this.http.delete(url);

  }

  public registrarFicha(ficha: any, id: Number): Observable<any>{

    const url = 'http://localhost:8080/ficha/corpo/usuario/' + id;

    console.log("Registrando usando o endpoint: " + url)

    console.log(JSON.stringify(ficha));

    return this.http.post(url,ficha);

  }

  public registrarFichaComCallBack(ficha: any, id: Number) {

    this.registrarFichaCallBack(ficha, id, this.refreshPage.bind(this)).subscribe();
    
  }

  public registrarFichaCallBack(ficha: any, id: Number, callback: () => void):Observable<any>{

    const url = 'http://localhost:8080/ficha/corpo/usuario/' + id;
    
    console.log("Registrando usando o endpoint: " + url)

    console.log(JSON.stringify(ficha));

    return this.http.post(url, ficha).pipe(
      tap(() => {
        // Invoke the callback function
        if (callback) {
          callback();
        }
      })
    );



  }

  refreshPage() {
    window.location.reload();
  }

  public registrarMedidaNaFicha(medida: any, idUsuario:Number, idFicha: Number):Observable<any>{

    const url = 'http://localhost:8080/' +idUsuario+'/'+idFicha;

    console.log("Registrando essa medida no endpoint: " + url);

    console.log(JSON.stringify(medida));

    return this.http.post(url,medida);

  }

  public editarFicha(ficha: any):Observable<any>{

    const url = 'http://localhost:8080/ficha/corpo/editar';

    console.log("Editando a ficha usando essa url: "+url);

    console.log(JSON.stringify(ficha));

    return this.http.put(url, ficha);

  }

}
