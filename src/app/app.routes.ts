import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { Assignment2Component } from './assignment2/assignment2.component';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment1Component } from './assignment1/assignment1.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'assignment1',
        component: Assignment1Component,
      },
      {
        path: 'assignment2',
        component: Assignment2Component,
      },
      {
        path: 'assignment3',
        component: Assignment3Component,
      },
    ],
  },
];
