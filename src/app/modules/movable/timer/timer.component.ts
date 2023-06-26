import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  @Input() duration!: Number; // Duration of the timer in seconds
  time!: number;
  private intervalId: any;

  ngOnInit() {
    this.time = this.duration.valueOf();
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => {
      if (this.time > 0) {
        this.time--;
      } else {
        this.stopTimer();
      }
    }, 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }
}
