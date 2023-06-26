import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FichaExercicioService } from 'src/app/service/ficha-exercicio.service';

@Component({
  selector: 'app-ficha-exercicio-editor',
  templateUrl: './ficha-exercicio-editor.component.html',
  styleUrls: ['./ficha-exercicio-editor.component.css']
})
export class FichaExercicioEditorComponent implements OnInit{


  id!: Number;
  ficha: any;

  constructor(private fichaExercicioService: FichaExercicioService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });

    this.fichaExercicioService.getFichaPorId(this.id).subscribe(data =>{
      this.ficha = data;
      console.log(data);
    })

  }

}
