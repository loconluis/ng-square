import { Component } from '@angular/core';
import { LugaresService } from '../services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Platzisquare';

  lat:number = 14.5082397;
  lng:number = -90.5733147;
  lugares = null;

  constructor(private lugaresService: LugaresService) {
    lugaresService.getLugares()
      .subscribe(lugares => {
        this.lugares = lugares;
      });
  }
}
