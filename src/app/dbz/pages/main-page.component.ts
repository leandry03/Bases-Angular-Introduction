
import { Component} from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  standalone: false,
  selector: 'app-dbz-main-page',//este es el identificador de este modulo
  templateUrl: './main-page.component.html'//esto debe apuntar al path del html
})

export class MainPageComponent {

  //vamos a hacer una inyeccion de dependencia en el constructor del servicio dbzService
  constructor(private dbzService: DbzService) {
    //al ser privado que debe ser asi el dbzService no funciona fuera de aqui
  }

  //entonces para eso crearemos metodos para usarlo en el html
  get characters(): Character[] {

    //esto va a retornar un arreglo de los charactere
    return [...this.dbzService.characters];
    //este metodo lo llamamos en el html
  }

  //y para borrar el id tambien crearemos un metodo
  onDeleteCharacter(id: string): void {
    //esto va a borrar el id del arreglo
    this.dbzService.deleteCharacterById(id);
    //este metodo lo llamamos en el html
  }

  onNewCharacter(character: Character): void{
    //esto va a agregar un nuevo caracter al arreglo
    this.dbzService.addNewCharacter(character);
  }
}
