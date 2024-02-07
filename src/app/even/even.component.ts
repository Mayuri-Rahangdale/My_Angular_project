import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-even',
  standalone: true,
  imports: [],
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent {
  @Input() evenEmitter: number = 0;
}
