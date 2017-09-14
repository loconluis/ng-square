import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  title = 'Platzisquare';
  lugares:any = [
    {id: 1 , plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia'},
    {id: 2 , plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {id: 3 , plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
    {id: 4 , plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll'},
    {id: 5 , plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
    {id: 6 , plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el Clavo'},
  ];

  lat:number = 14.5082397;
  lng:number = -90.5733147;


  constructor() {
    
  }
}
