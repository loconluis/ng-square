import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {active: true, nombre: 'Floreria la gardenia'},
    {active: true, nombre: 'Donas la pasadita'},
    {active: true, nombre: 'Veterinaria Huellitas Felices'},
    {active: false, nombre: 'Sushi Sushiroll'},
    {active: true, nombre: 'Hotel la Gracia'},
    {active: false, nombre: 'Zapateria el Clavo'},
  ];

  personas:any = [
    {nombre: 'Luis Locon', edad: 24 },
    {nombre: 'Monica Locon', edad: 28 },
    {nombre: 'Away León', edad: 32 },
    {nombre: 'Ileana M', edad: 16 },
    {nombre: 'Gato Ramirez', edad: 17 },
    {nombre: 'Carlos Herrera', edad: 22 },
    {nombre: 'Kike Pavón', edad: 31 }
  ]

  lat:number = 14.5082397;
  lng:number = -90.5733147;


  constructor() {
    
  }
}
