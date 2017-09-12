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
  ]

  constructor() {
    
  }
}
