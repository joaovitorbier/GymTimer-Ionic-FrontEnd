import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaCorpoEditorComponent } from './ficha-corpo-editor/ficha-corpo-editor.component';
import { FichaExercicioEditorComponent } from './ficha-exercicio-editor/ficha-exercicio-editor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedService } from 'src/app/service/shared.service';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FichaCorpoEditorComponent,
    FichaExercicioEditorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    RouterModule
  ],
  providers: [
    SharedService,
    FichaCorpoService,
    FichaExercicioService
  ],
  exports: [
    FichaCorpoEditorComponent,
    FichaExercicioEditorComponent,
  ],
})
export class EditoresModule { }
