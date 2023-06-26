import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { MedidasService } from 'src/app/service/medidas.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-medidas',
  templateUrl: './medidas.component.html',
  styleUrls: ['./medidas.component.css']
})
export class MedidasComponent implements OnInit {

  constructor(public fichaCorpoService: FichaCorpoService, private shared: SharedService, private router: Router, private route: ActivatedRoute, private medidaService: MedidasService) { }

  id!: Number;
  idUsuario!: Number;
  ficha: any = {};

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.fichaCorpoService.getFichaPorId(this.id).subscribe(data =>{
      this.ficha = data;
      console.log(data);
    })

    this.idUsuario = this.shared.getId();

  }

  deletarMedida(idMedida: Number){
    this.medidaService.deletarMedida(this.idUsuario,idMedida).subscribe(
      () =>{
        console.log("Medida foi deletada com sucesso!");
      },
      (error) =>{
        console.error("Medida NÃO foi deletada!");
      }
    )
  }

  registrarNovaMedida(){
    this.router.navigate(['medidas-nova', this.id])
  }

}
