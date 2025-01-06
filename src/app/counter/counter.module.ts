import { NgModule } from "@angular/core";
import { CounterComponent } from "./components/counter/counter.component";


//este sera el modulo para agrupar todos los componente de este bloque
@NgModule({
  //va a tener la declaracion para llamar nuestro modulo del archivo .ts
  declarations: [
    //aqui van los componentes que se van a utilizar en este modulo
    CounterComponent
  ],
  //va a tener la exportacion para poder llamarlo desde otro modulo
  exports: [
    CounterComponent
  ]


})
export class CounterModule { }
