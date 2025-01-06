import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule } from "@angular/common";



//vamos a crear un modulo aqui para los heroes
@NgModule({
  //aqui iran las declaraciones
  declarations: [
    HeroComponent,
    ListComponent
  ],
  exports:[
    HeroComponent,
    ListComponent
  ],
  imports: [
    CommonModule, //este import es para poder mostrar la logica de nuestro componente ejemplo Ngif
  ]
})
export class HeroModule{}
