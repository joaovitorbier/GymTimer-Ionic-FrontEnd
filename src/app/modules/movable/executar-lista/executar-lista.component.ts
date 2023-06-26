import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExercicioService } from 'src/app/service/exercicio.service';
import { ModalController } from '@ionic/angular';
import { TimerComponent } from '../timer/timer.component';
import { ModalTimerComponent } from '../modal-timer/modal-timer.component';

@Component({
  selector: 'app-executar-lista',
  templateUrl: './executar-lista.component.html',
  styleUrls: ['./executar-lista.component.css'],
})
export class ExecutarListaComponent  implements OnInit {

  idLista!:Number;
  listaInicial: any = {};
  listaAtual: any = {};

  constructor(private exercicioService: ExercicioService, private route: ActivatedRoute, private router: Router, private modalController: ModalController) { }

  async abrirTimer(tempo: Number) {
    const modal = await this.modalController.create({
      component: ModalTimerComponent,
      componentProps: {
        tempo: tempo,
      }
    });
    return await modal.present();
  }

  ngOnInit() {
     this.route.params.subscribe(params =>{
      this.idLista = params['id'];
    });

    this.exercicioService.getLista(this.idLista).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.listaInicial = data;
      }
    )

    this.exercicioService.getLista(this.idLista).subscribe(
      data => {
        console.log(JSON.stringify(data));
        this.listaAtual = data;
      }
    )

  }

}
