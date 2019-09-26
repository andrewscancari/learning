import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url = 'https://www.alura.com.br/assets/api/cursos/angular-fundamentos.svg';
  alt = 'Fundamentos Angular';
  height = 48;
  width = 48;
}
