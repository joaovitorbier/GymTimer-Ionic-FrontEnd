import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/movable/login/login.component';
import { FichaCorpoComponent } from './modules/movable/ficha-corpo/ficha-corpo.component';
import { RouterModule, Routes } from '@angular/router';
import { FichaExercicioComponent } from './modules/movable/ficha-exercicio/ficha-exercicio.component';
import { UsuarioComponent } from './modules/movable/usuario/usuario.component';
import { NovoUsuarioComponent } from './modules/registradores/novo-usuario/novo-usuario.component';
import { NovaFichaExercicioComponent } from './modules/registradores/nova-ficha-exercicio/nova-ficha-exercicio.component';
import { NovaFichaCorpoComponent } from './modules/registradores/nova-ficha-corpo/nova-ficha-corpo.component';
import { FichaCorpoEditorComponent } from './modules/editores/ficha-corpo-editor/ficha-corpo-editor.component';
import { FichaExercicioEditorComponent } from './modules/editores/ficha-exercicio-editor/ficha-exercicio-editor.component';
import { MedidasComponent } from './modules/movable/medidas/medidas.component';
import { NovaMedidaComponent } from './modules/registradores/nova-medida/nova-medida.component';
import { ExerciciosComponent } from './modules/movable/exercicios/exercicios.component';
import { NovoExercicioComponent } from './modules/registradores/novo-exercicio/novo-exercicio.component';
import { TimerComponent } from './modules/movable/timer/timer.component';
import { ExecutarListaComponent } from './modules/movable/executar-lista/executar-lista.component';

const routes: Routes = [

  //{ path: 'usuario', loadChildren: () => import('./modules/movable/usuario/usuario.component').then(m => m.UsuarioComponent) },
  //NÃO FUNCIONA PQ TEM QUE TER UM MÓDULO POR COMPONENT E EU NÃO SOU DOIDO

  {path: '', component: LoginComponent},
  {path: 'ficha-corpo', component: FichaCorpoComponent},
  {path: 'ficha-exercicio', component: FichaExercicioComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'usuario-novo', component: NovoUsuarioComponent},
  {path: 'ficha-exercicio-nova', component: NovaFichaExercicioComponent},
  {path: 'ficha-corpo-nova', component:  NovaFichaCorpoComponent},
  {path: 'ficha-corpo-editar/:id', component: FichaCorpoEditorComponent},
  {path: 'ficha-exercicio-editar/:id', component: FichaExercicioEditorComponent},
  {path: 'medidas/:id', component: MedidasComponent},
  {path: 'medidas-nova/:id', component: NovaMedidaComponent},
  {path: 'exercicios/:id', component: ExerciciosComponent},
  {path: 'novo-exercicio/:id', component: NovoExercicioComponent},
  {path: 'executar-lista/:id', component: ExecutarListaComponent}
];

@NgModule({
  imports: [
    //RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }) Só pra salvar como estava antes, mas não usa pq o Ionic importa Lazy
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
