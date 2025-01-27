import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  standalone: false,
  templateUrl:'./list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  //vamos a crear un personaje aqui para renderizar el html del list.component.httml

  //para utilizar la clase pade del main-page.component.ts debemos usar el input
  @Input()//esto hace que ya pueda usarlo y mostrar la lista del padre
  public characterList: Character[] = [{
    name: 'trunks',
    power: 10,
  }];


  //vamos a crear un nuevo evento
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();
  //vamos a crear un mmetodo para eliminar, el id lo ponemos opcional por si no lo recivimos no emitir el evento
  public onDeleteCharacter(id?: string): void {
    //vamos a validar que si el id no viene no retorne nada
    if (!id) return;
    this.onDelete.emit(id)
  }

}
