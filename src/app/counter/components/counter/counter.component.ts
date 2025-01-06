
//este archivo sera para convertir en un componente una clase que crearemos para el counter

import { Component } from "@angular/core";

//vamos a crear el componente de esta clase
@Component({
  standalone: false,
  selector: 'app-counter',//esto es un nombre identificativo
  template: `
    <!--Ahora vamos a acceder a la propiedad counter para mostrarla-->
  <h3>Counter:{{counter}}</h3>

  <!-- vamos a crear un boton de incremento y descremento -->
  <button (click)="increaseBy(+1)">+1</button><!--esto va a incrementar en mas 1 por el parametro enviado -->
  <button (click)="counterDefect()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button><!--Esto va a descrementar-->


  `,
})
//si dejamos esta clase sin llamar en el modulo no va a marcar un error y no podremos usar el componente
export class CounterComponent{

  public counter: number = 10;

  //aqui crearemos los metodos que usamos en el template esto es una manera de hacer todo en el mismo archivo
  increaseBy(value: number){
    this.counter += value;
  }

  //aqui en counter defect que se encarga de restablecerlo a cero
  counterDefect(){
    this.counter = 10;
  }
}
