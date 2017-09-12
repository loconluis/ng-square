import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia'},
    {cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita'},
    {cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices'},
    {cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll'},
    {cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia'},
    {cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el Clavo'},
  ];

  lat:number = 14.5082397;
  lng:number = -90.5733147;


  constructor() {
    
  }
}
