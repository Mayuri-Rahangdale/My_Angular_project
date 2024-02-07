import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-assignment1',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './assignment1.component.html',
  styleUrl: './assignment1.component.css',
})
export class Assignment1Component {
  Skills = 'Java, Spring Boot, Angular, HTML, CSS & SQL';
  Education = 'Bachelors of Engineeering';
  Department = 'Electronics and Telecomm.';
  CGPA = 9.1;
  showDetails = false;
  longText = `Hi, I'm a skilled professional with expertise in Java, Spring Boot, Angular, HTML, CSS & SQL. 
  Holding a Bachelors's degree in Electronics and Telecommunication with a 
  CGPA of 9.1, I bring a strong foundation in both theory and practical software development. 
  My proficiency extends from back-end technologies to front-end design, making me a versatile contributor to innovative projects. 
  Excited about the opportunity to apply my skills and knowledge to your team or project.`;

  showAlert() {
    this.showDetails = !this.showDetails;
  }
}
