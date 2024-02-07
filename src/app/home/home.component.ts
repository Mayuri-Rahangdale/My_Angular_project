import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterOutlet, TabComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
