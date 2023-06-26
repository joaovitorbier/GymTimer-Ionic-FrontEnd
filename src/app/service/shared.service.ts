import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  private id!: number;

  setId(value: Number): void{
    this.id = value.valueOf();
  }

  getId(): Number{
    return this.id;
  }

  getIdString(): String{
    return this.id.toString();
  }

  constructor() { }

}
