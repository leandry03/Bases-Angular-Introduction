import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  //aqui vamos a crear un arreclo de personaje temporalmente
  public characters: Character[] = [{//en cada personaje debemos implementar el name y el power porque son de tipo de la interfaz
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name: 'Goku',
    power: 9500
  },
  {
    id: uuid(),
    name: 'Vegeta',
    power: 9000
  }
];

addNewCharacter(character: Character){

  //el operador express ... quiere decir toma todas las propiedades del charcter
  const newCharacter: Character = {id: uuid(), ...character};

  this.characters.push(newCharacter);

}

//este metodo se encarga de borrar por id
deleteCharacterById(id: string){
  //aqui vamos a eliminar el personaje con el id que le pasemos
  this.characters = this.characters.filter(character => character.id !== id);
};

// onDeleteCharacter(index: number){
//   this.characters.splice(index, 1);
// }

}
