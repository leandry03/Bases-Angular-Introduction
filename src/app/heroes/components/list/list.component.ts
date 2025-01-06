import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: false,

  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

  //vamos a crear una lista de heroe en un arreglo para mostrarlo en el html con ngfor
  public heroNames: string[] = ['Spideman', 'Hulk', 'Iroman', 'Thor', 'Superman'];

  //vamos a crear una propiedad para almacenar el elemento borrado del pop
  public deletedHero?: string = '';

  //Vamos a crear un metodo que me borrara el ultimo elemento del arreglo
  public deleteLastHero(): void {
    //pop elimina el ultimo elemento y lo retorna vamos a almacenar ese valor en esta variable
    this.deletedHero = this.heroNames.pop();

  }

}
