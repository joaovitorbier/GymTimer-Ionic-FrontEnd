import { FichaCorpoService } from './../../service/ficha-corpo.service';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioComponent } from './usuario/usuario.component';
import { FichaCorpoComponent } from './ficha-corpo/ficha-corpo.component';
import { FichaExercicioComponent } from './ficha-exercicio/ficha-exercicio.component';
import { UsuarioService } from 'src/app/service/usuario.service';
import { MedidasService } from 'src/app/service/medidas.service';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from 'src/app/service/shared.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MedidasComponent } from './medidas/medidas.component';
import { ExerciciosComponent } from './exercicios/exercicios.component';
import { ExercicioService } from 'src/app/service/exercicio.service';
import { TimerComponent } from './timer/timer.component';
import { ExecutarListaComponent } from './executar-lista/executar-lista.component';
import { ModalTimerComponent } from './modal-timer/modal-timer.component';
import { ListaExercicioService } from 'src/app/service/lista-exercicio.service';
import { SharedfichacorpoService } from 'src/app/service/sharedfichacorpo.service';

@NgModule({
  declarations: [
    UsuarioComponent,
    FichaCorpoComponent,
    FichaExercicioComponent,
    LoginComponent,
    MedidasComponent,
    ExerciciosComponent,
    TimerComponent,
    ExecutarListaComponent,
    ModalTimerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  exports: [
    UsuarioComponent,
    FichaCorpoComponent,
    FichaExercicioComponent,
    LoginComponent,
    ExerciciosComponent,
    TimerComponent,
    ExecutarListaComponent,
    ModalTimerComponent

  ],
  providers:[
    UsuarioService,
    MedidasService,
    FichaCorpoService,
    FichaExercicioService,
    SharedService,
    ExercicioService,
    ListaExercicioService,
    SharedfichacorpoService
  ]
})
export class MovableModule { }
