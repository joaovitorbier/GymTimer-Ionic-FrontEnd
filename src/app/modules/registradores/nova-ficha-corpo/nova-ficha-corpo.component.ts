import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { SharedService } from 'src/app/service/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-nova-ficha-corpo',
  templateUrl: './nova-ficha-corpo.component.html',
  styleUrls: ['./nova-ficha-corpo.component.css']
})
export class NovaFichaCorpoComponent implements OnInit {

  constructor(private router: Router, private shared: SharedService, private service: FichaCorpoService) { }

  idUsuario?: Number;

  ficha: any = {

    peso: null,
    altura: null,
    sexo: '',
    bodyFat:null
    /*
    MODELO DO JSON PRA ENVIAR
    "peso": 99.4,
    "altura": 1.75,
    "sexo": "MALE",
    "bodyFat": 35.3
    */

  }

  ngOnInit() {
  }

  /*
  registrarFichaCorpo():void{
    this.idUsuario = this.shared.getId();

    this.service.registrarFichaComCallBack(this.ficha, this.idUsuario);

  }

  */
  registrarFichaCorpo(): void{

    this.idUsuario = this.shared.getId();

    this.service.registrarFicha(this.ficha,this.idUsuario).subscribe(
      () => {
        console.log("Ficha foi registrada com sucesso");
      },
      (error) => {
        console.error("Erro na hora de registrar a ficha");
      }
    )

    this.router.navigate(['/usuario'])

  }
  
  voltarPaginaFicha():void{
    this.router.navigate(['/usuario'])
  }

}
