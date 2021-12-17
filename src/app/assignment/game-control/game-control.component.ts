import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output() startIncrement = new EventEmitter<number>();
  incrementHandler: number;
  counter = 0;

  constructor() {
  }

  ngOnInit(): void {
  }

  onStartGame() {
    this.incrementHandler = setInterval(() => {
      this.startIncrement.emit(this.increment());
    }, 1000);
  }

  increment() {
    this.counter = this.counter + 1;
    return this.counter;
  }

  onStopGame() {
    clearInterval(this.incrementHandler);
  }
}
