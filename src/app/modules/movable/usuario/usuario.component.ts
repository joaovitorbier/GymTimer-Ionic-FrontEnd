import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UsuarioService } from 'src/app/service/usuario.service';
import { Observable, retry } from 'rxjs';
import { Usuario } from 'src/app/model/usuario';
import { SharedService } from 'src/app/service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {


  usuario: any = {};
  id?: Number;

  constructor(public usuarioService: UsuarioService , private shared: SharedService, private router: Router){}

  ngOnInit(): void{

    this.id = this.shared.getId();

    this.usuarioService.getUsuarioId(this.id).subscribe(response =>{
      console.log(response);
      this.usuario = response;



      //VER COMO RESOLVER A DATA DE NASCIMENTO SÓ MOSTRANDO A IDADE EM ANOS
      //this.data = this.usuario.dataNascimento - Date.now();

    })

  }

  goFichaCorpo(){
    this.router.navigate(['/ficha-corpo']);
  }

  goFichaExercicio(){
    this.router.navigate(['/ficha-exercicio']);
  }

  sairUsuario(){
    this.usuario = null;
    this.router.navigate(['']);
  }

  //public StringUsuario: String = this.usuarioService.devolverUsuario();



  //public usuario: Usuario = JSON.parse(this.usuarioService.devolverUsuario());


}
