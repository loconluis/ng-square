import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Platzisquare';
  lugares:any = [
    {nombre: 'Floreria la gardenia'},
    {nombre: 'Donas la pasadita'},
    {nombre: 'Veterinaria Huellitas Felices'},
  ]

  constructor() {
    
  }
}
