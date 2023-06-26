import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovaFichaCorpoComponent } from './nova-ficha-corpo/nova-ficha-corpo.component';
import { NovaFichaExercicioComponent } from './nova-ficha-exercicio/nova-ficha-exercicio.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/service/usuario.service';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';
import { SharedService } from 'src/app/service/shared.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NovaMedidaComponent } from './nova-medida/nova-medida.component';
import { NovoExercicioComponent } from './novo-exercicio/novo-exercicio.component';
import { ExercicioService } from 'src/app/service/exercicio.service';
import { ListaExercicioService } from 'src/app/service/lista-exercicio.service';

@NgModule({

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule,
  ],

  declarations: [
    NovaFichaCorpoComponent,
    NovaFichaExercicioComponent,
    NovoUsuarioComponent,
    NovaMedidaComponent,
    NovoExercicioComponent
  ],

  exports: [
    NovaFichaCorpoComponent,
    NovaFichaExercicioComponent,
    NovoUsuarioComponent,
    NovaMedidaComponent,
    NovoExercicioComponent
  ],

  providers: [
    UsuarioService,
    FichaCorpoService,
    FichaExercicioService,
    SharedService,
    ExercicioService,
    ListaExercicioService
  ]

})
export class RegistradoresModule { }
