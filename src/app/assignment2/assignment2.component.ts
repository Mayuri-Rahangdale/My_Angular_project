import { Component } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-assignment2',
  standalone: true,
  imports: [
    ChildComponent,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css'],
})
export class Assignment2Component {
  ParentMessage: string = '';
  childMessage: string = '';
  boxInput(event: any) {
    this.ParentMessage = event.target.value;
  }
  sendToChild() {
    return this.ParentMessage;
  }
  getChildMessage(value: any) {
    this.childMessage = value;
  }
}
