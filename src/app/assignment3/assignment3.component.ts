import { Component } from '@angular/core';
import { EvenComponent } from '../even/even.component';
import { OddComponent } from '../odd/odd.component';

@Component({
  selector: 'app-assignment3',
  standalone: true,
  imports: [EvenComponent, OddComponent],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.css',
})
export class Assignment3Component {
  timer: any = 0;
  timerInterval: any;
  evenCount: any = [];
  oddCount: any = [];
  startGame() {
    this.timerInterval = setInterval(() => {
      this.timer++;
      if (this.timer % 2 == 0) {
        this.evenCount.push(this.timer);
      } else {
        this.oddCount.push(this.timer);
      }
    }, 500);
  }
  stopGame() {
    clearInterval(this.timerInterval);
  }
  returnEvenCount(): number {
    return this.evenCount.length;
  }
  returnOddCount(): number {
    return this.oddCount.length;
  }
  resetGame() {
    this.timer = 0;
    this.evenCount = -1;
    this.oddCount = -1;
    console.log(this.evenCount.length + '  ' + this.oddCount.length);
  }
}
