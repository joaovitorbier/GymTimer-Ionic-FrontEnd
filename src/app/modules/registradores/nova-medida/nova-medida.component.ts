import { MedidasService } from 'src/app/service/medidas.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-nova-medida',
  templateUrl: './nova-medida.component.html',
  styleUrls: ['./nova-medida.component.css']
})
export class NovaMedidaComponent implements OnInit {

  constructor(public fichaCorpoService: FichaCorpoService, private shared: SharedService, private router: Router, private route: ActivatedRoute, private medidaService: MedidasService) { }

  idFicha!: Number;
  
  medida: any = {
    id: null,
    nomeMusculo: '',
    medidaAtual: null,
    medidaAnterior: null
  };

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.idFicha = params['id'];
    });

  }

  adicionarMedida(){
    this.medidaService.adicionarMedidaAFichaCorpo(this.idFicha, this.medida).subscribe(
      () => {
        console.log("Medida foi registrada com sucesso");
      },
      (error) => {
        console.error("Medida não foi registrada!");
      }
    )

    this.router.navigate(['medidas',this.idFicha]);

  }
  
  visualizarMedidas(){
    this.router.navigate(['medidas',this.idFicha]);
  }

}
