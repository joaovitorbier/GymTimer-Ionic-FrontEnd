import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css']
})
export class NovoUsuarioComponent implements OnInit {

  constructor(private service: UsuarioService, private router: Router){}

  usuario: any = {
    nome: '',
    dataNascimento: null,
    telefone: '',
    senha: '',
    email:''

    /*
    EXEMPLO DA REQUISIÇÃO JSON PRA MANDAR
    {
        "nome": "CAMMY",
        "dataNascimento": "2023-06-14",
        "telefone": "3261-2131",
        "login": {
            "senha": "GUILE",
            "login": "streetfighter@gmail.com"
        }
    }
    */

  };

  ngOnInit() {
  }

  registrarUsuario():void{

    /*
    id: Number, dataNascimento: Date, telefone: String
    this.usuario.id = id;
    this.usuario.dataNascimento = dataNascimento;
    this.usuario.telefone = telefone;
    */
    this.service.postUsuario(this.usuario).subscribe(
      () => {
        console.log("Usuario foi registrado com sucesso");
        this.router.navigate(['']);
      },
      (error) => {
        console.error("O usuario não foi registrado!");
      }
    )

    this.router.navigate(['']);


  }

}
