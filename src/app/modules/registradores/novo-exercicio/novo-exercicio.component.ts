import { ExercicioService } from 'src/app/service/exercicio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-novo-exercicio',
  templateUrl: './novo-exercicio.component.html',
  styleUrls: ['./novo-exercicio.component.css'],
})
export class NovoExercicioComponent  implements OnInit {

  constructor(private exercicioService: ExercicioService,private route: ActivatedRoute, private router: Router) { }

  idFicha!: Number;
  exercicio: any = {

    id: null,
    nome: '',
    categoriaMuscular:'',
    repeticoes:null,
    series:null,
    intervalo:null

    /*
    {
        "id": 1,
        "nome": "Cadeira Adutora",
        "categoriaMuscular": "GLUTEOS",
        "repeticoes": 15,
        "series": 4,
        "intervalo": 90
    }
    */

  }

  ngOnInit() {
    
    this.route.params.subscribe(params =>{
      this.idFicha = params['id'];
    });

  }

  salvarExercicio(){
    this.exercicioService.postExercicioNaLista(this.idFicha,this.exercicio).subscribe(
      () => {
        console.log("Exercicio foi adicionado a ficha com sucesso");
      },
      (error) => {
        console.error("Erro na hora de registrar o exercício");
      }
    )
  }

}