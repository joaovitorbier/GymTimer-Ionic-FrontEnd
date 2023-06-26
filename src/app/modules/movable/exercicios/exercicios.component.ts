import { Component, OnInit } from '@angular/core';
import { ExercicioService } from 'src/app/service/exercicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css'],
})
export class ExerciciosComponent  implements OnInit {

  idLista!: Number;
  lista: any = {};

  constructor(private exercicioService: ExercicioService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      this.idLista = params['id'];
    });

    this.exercicioService.getLista(this.idLista).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.lista = data;
      }
    )

  }

  adicionarExercicio(){
    this.router.navigate(['novo-exercicio',this.idLista]);
  }

  executarLista(idLista: Number){
    this.router.navigate(['executar-lista',this.idLista])
  }

  removerExercicio(idLista: Number, idExercicio: Number){
    this.exercicioService.removerExercicioDaLista(idLista,idExercicio).subscribe(
      () => {
        console.log("Exercicio foi removido da ficha com sucesso");
      },
      (error) => {
        console.error("Erro na hora de remover o exercício");
      }
    )
  }

}
