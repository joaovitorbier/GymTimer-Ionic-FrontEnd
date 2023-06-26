import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SharedService } from 'src/app/service/shared.service';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsuarioComponent } from '../usuario/usuario.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  inputNumber: any;
  usuario? : any;
  email!: String;
  senha!: String;

  constructor(private loginService: LoginService ,private usuarioService: UsuarioService, private shared: SharedService, private router: Router, ) { }

  logar() {

    this.loginService.login(this.email,this.senha).subscribe(
      response =>{
        this.usuario = response;
        this.shared.setId(response.id);
        
        console.log("O ID QUE SERÁ UTILIZADO NAS NOSSAS OPERAÇÕES SERÁ: "+ this.shared.getIdString());
        console.log(response);
        console.log("---------------------------")
        console.log(this.usuario);

        this.goTelaUsuario();

      }, error => {
        console.error(error);
      }
    );

    /*
    const id = this.inputNumber;
    this.usuarioService.getUsuarioId(id).subscribe(response => {

      this.usuario = response;

      this.shared.setId(response.id);

      console.log("O ID QUE SERÁ UTILIZADO NAS NOSSAS OPERAÇÕES SERÁ: "+ this.shared.getIdString());
      console.log(response);
      console.log("---------------------------")
      console.log(this.usuario);

    }, error => {

      console.error(error);
    });
    */
  }

  goFichaCorpo(){
    this.router.navigate(['/ficha-corpo'])
  }

  goFichaExercicio(){
    this.router.navigate(['/ficha-exercicio'])
  }

  goTelaUsuario(){
    this.router.navigateByUrl('usuario');
  }


}
