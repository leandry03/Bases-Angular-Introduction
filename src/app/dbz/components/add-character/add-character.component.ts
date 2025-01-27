import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  standalone: false,
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {

  //este output pone a la escucha y EventEmitter es un generico de tipo Character
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  //vamos a crear una propiedad que tendra variable y para llemar los input y tambien recibir de los input
  public characters: Character = {
    name: '',
    power: 0,
  }

  //vamos a crear un metodo para emitir lo que recibimos de los imput
  public emitCharacter(): void{
    console.log(this.characters);

    //vamos a validar que el name no venga vacio
    if(this.characters.name.length == 0) return;

    //si viene un nombre valido vamos a usar la funcion emit que recibira lo almacenado en el character
    this.onNewCharacter.emit(this.characters)//le pasamos el this.character que tendra el valor almacenado

    //vamos a limpiar los campos a su valor por defecto luego de mostrarlo
    this.characters.name = '';
    this.characters.power = 0;
  }
}
