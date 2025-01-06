import { Component } from '@angular/core';

//este es un decorador para crear esta clase en un componente y usarlo en el html
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',//aqui estamos diciendo que lo usaremos en este archivo
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Hola Mundo';//esta propiedad podremos acceder a ella en el html con su nombre
}
