import { listasDeExercicios } from './../../../model/listas-de-exercicio';
import { FichaExercicio } from './../../../model/ficha-exercicio';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable, retry } from 'rxjs';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { ListaExercicioService } from 'src/app/service/lista-exercicio.service';

@Component({
  selector: 'app-ficha-exercicio',
  templateUrl: './ficha-exercicio.component.html',
  styleUrls: ['./ficha-exercicio.component.css']
})
export class FichaExercicioComponent implements OnInit{

  fichas: FichaExercicio[] = [];
  id?: Number;
  nome!: String;

  constructor(private service: FichaExercicioService, private router: Router, private shared: SharedService, private listaService: ListaExercicioService){}

  //QUANDO INICIA O COMPONENT
  ngOnInit(): void {


      this.id = this.shared.getId();

      this.service.getData(this.id).subscribe(
        data =>{
          this.fichas = data;
          console.log(data);
        }
      )

  }

  goToUsuario(){
    this.router.navigate(['/usuario']);
  }

  adicionarLista(){
    this.router.navigate(['/ficha-exercicio-nova']);
  }

  excluirExercicioDaLista(idLista: Number, idExercicio: Number): void{

    this.service.removerExercicioLista(idLista,idExercicio).subscribe(
      () =>{
        console.log("Exercicio " + idExercicio + " da Lista " +idLista + " foi removido");
      },
      (error)=>{
        console.error("Um erro aconteceu",error);
      }
    )

    /*
    console.log("REMOVENDO O EXERCICIO DE ID: " + idExercicio + " DA LISTA DE ID: " +idLista);
    console.log(this.service.removerExercicioLista(idLista,idExercicio));
    return this.service.removerExercicioLista(idLista, idExercicio);
    */

  }

  /*
  excluirLista(idLista: Number){
    console.log("TENTANDO DELETAR O ELEMENTO " + idLista + " DA LISTA");
    this.service.deleteFicha(idLista);
  }
  */

  editarFicha(value: Number){
    this.router.navigate(['ficha-exercicio-editar', value]);
  }

  visualizarFicha(value:Number){
    this.router.navigate(['exercicios',value]);
  }

  adicionarNovaListaExercicios(idLista: Number){
    this.listaService.postLista(this.nome, idLista).subscribe(
      () => {
        console.log("Lista registrada com sucesso");
      },
      (error) =>{
        console.error("Um erro ocorreu",error);
      }
    )

    this.goToUsuario();

  }

}
