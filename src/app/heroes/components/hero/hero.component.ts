import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  standalone: false,

  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  //vamos a crear una cuanta propiedades
  public name: string = 'Iroman';
  public age: number = 45;

  //vamos a crear una propiedad que devolvera un string el nombre en mayuscula
  get capitalizedName():string{

    return this.name.toUpperCase();//el toUpperCase pone todo el name en mayuscula
  }

  //vamos a crear un metodo que una el nombre y la edad
  public getHeroDescription():string {
    return `${this.name} - ${this.age} años`
  }

  //vamos a crear un metodo para cambiar la edad
  public changeAge(value: number):void{
    this.age = value;
  }

  //vamos a crear otro metodo para cambiar el nombre
  public changeName(value: string):void{

    this.name = value;

  }

  //vamos a crear un metodo para poner todo por defecto
  public resetForm():void{
    this.name = 'Iroman';
    this.age = 45;
  }

}
