import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FichaCorpoService } from 'src/app/service/ficha-corpo.service';
import { SharedService } from 'src/app/service/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ficha-corpo-editor',
  templateUrl: './ficha-corpo-editor.component.html',
  styleUrls: ['./ficha-corpo-editor.component.css']
})
export class FichaCorpoEditorComponent implements OnInit {

  id!: Number;
  ficha: any = {

    id: null,
    peso: null,
    altura: null,
    bodyFat: null,

  };

  constructor(private fichaCorpoService: FichaCorpoService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.fichaCorpoService.getFichaPorId(this.id).subscribe(data =>{
      this.ficha.id = data.id;
      this.ficha.peso = data.peso;
      this.ficha.altura = data.altura;
      this.ficha.bodyFat = data.bodyFat;
      console.log(this.ficha);
    })

  }

  salvarEdicao(){
    this.fichaCorpoService.editarFicha(this.ficha).subscribe(
      () =>{
        console.log("Edição foi concluída");
      },
      (error) => {
        console.error("Edição falhou!");
      }
    )
  }

}
