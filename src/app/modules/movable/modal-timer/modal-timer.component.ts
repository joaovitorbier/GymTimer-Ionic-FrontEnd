import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-timer',
  templateUrl: './modal-timer.component.html',
  styleUrls: ['./modal-timer.component.css'],
})
export class ModalTimerComponent  implements OnInit {
  
  @Input() tempo!: Number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  fechaModal() {
    this.modalController.dismiss();
  }

  fechaModalComTempo() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
