import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-tab',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatButtonModule],
  templateUrl: './tab.component.html',
  styleUrl: './tab.component.css',
})
export class TabComponent {
  constructor(private routes: Router) {}
  sendToLogInPage() {
    this.routes.navigate(['/']);
  }
}
