import { Medidas } from 'src/app/model/medidas';
import { Component, OnInit, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { FichaCorpos } from 'src/app/model/ficha-corpos';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';
import { SharedfichacorpoService } from 'src/app/service/sharedfichacorpo.service';

@Component({
  selector: 'app-ficha-corpo',
  templateUrl: './ficha-corpo.component.html',
  styleUrls: ['./ficha-corpo.component.css']
})
export class FichaCorpoComponent implements OnInit {

  fichasCorpo: any;
  id?: Number;

  constructor(
    public fichaSCorpoService: FichaCorpoService, 
    private shared: SharedService,
    private router: Router,
    //public sharedFichaCorpo: SharedfichacorpoService, ESTRATÉGIA QUE DEU ERRADO
    private changeDetectorRef: ChangeDetectorRef //MUITO TRABALHOSO, E AINDA NÃO ENTENDI COMO FUNCIONA, VER SE DÁ PRA APLICAR DEPOIS
  ){}

  ngOnInit(): void {

      
      this.id = this.shared.getId();

      this.fichaSCorpoService.getFichas(this.id).subscribe(data =>{
        this.fichasCorpo = data;
        console.log(data);
        this.changeDetectorRef.detectChanges(); //NÃO FUNCIONA...PQ?
      })

      //A IDEIA DE USAR UM SHAREDFICHACORPO NÃO FUNCIONOU, ELE NÃO FAZ O UPDATE
      /*
      this.id = this.shared.getId();

      this.fichaSCorpoService.getFichas(this.id).subscribe(data =>{
        this.fichasCorpo = data;
        this.sharedFichaCorpo.setFichas(data);
        console.log(data);
      })
      */

  }

  registrarNovaFicha(){
    this.router.navigate(['ficha-corpo-nova'])
  }

  goToUsuario(){
    this.router.navigate(['/usuario']);
  }

  editarFicha(value: Number){
    this.router.navigate(['ficha-corpo-editar', value]);
  }

  visualizarMedidas(value: Number){
    this.router.navigate(['medidas',value]);
  }

}
