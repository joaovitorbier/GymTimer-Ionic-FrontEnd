import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/service/shared.service';
import { FormsModule } from '@angular/forms';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';

@Component({
  selector: 'app-nova-ficha-exercicio',
  templateUrl: './nova-ficha-exercicio.component.html',
  styleUrls: ['./nova-ficha-exercicio.component.css']
})
export class NovaFichaExercicioComponent implements OnInit {

  constructor(private router: Router, private sharedService: SharedService, private service: FichaExercicioService) {}

  ficha: any = {

    objetivo: '',
    metaPeso: null,
    metaBodyFat: null,

  }

  idUsuario?: Number;

  ngOnInit() {}

  registrarFichaExercicio(): void{

    this.idUsuario = this.sharedService.getId();

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

  voltarPaginaFichas():void{
    this.router.navigate(['/usuario'])
  }

}
