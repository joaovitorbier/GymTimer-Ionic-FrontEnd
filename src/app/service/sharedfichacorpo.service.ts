import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedfichacorpoService {
  
  private fichaCorpo = new BehaviorSubject<any[]>([]);

  public getFichas() {
    return this.fichaCorpo.asObservable();
  }

  public setFichas(fichas: any[]) {
    this.fichaCorpo.next(fichas);
  }
}
