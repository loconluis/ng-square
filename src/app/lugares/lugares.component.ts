import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenedorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
        opacity: 1
      })),
      transition('inicial => final', animate(3000)),
      transition('final => inicial', animate(500)),
    ])
  ]
})
export class LugaresComponent {
  title = 'Platzisquare';
  state = 'inicial';

  lat:number = 14.5082397;
  lng:number = -90.5733147;
  lugares = null;


  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe(lugares => {
        this.lugares = lugares;
        let me = this;
        // pasar de objeto a un arreglo
        me.lugares = Object.keys(me.lugares).map(function (key) { return me.lugares[key] });
        this.state = 'final';
      }, error => { console.log(error);
      alert('Tenemos algo de dificultades , disculpe las molestias. Error: '+error.statusText) });
  }
}
