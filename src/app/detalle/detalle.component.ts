import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})
export class DetalleComponent {
  lugares:any = [
    {id: 1 , plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia', description: 'cualquiera'},
    {id: 2 , plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita', description: 'cualquiera'},
    {id: 3 , plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices', description: 'cualquiera'},
    {id: 4 , plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll', description: 'cualquiera'},
    {id: 5 , plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia', description: 'cualquiera'},
    {id: 6 , plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el Clavo', description: 'cualquiera'},
  ];

  id= null;
  lugar:any = {};

  constructor(private route:ActivatedRoute) {
    console.log(this.route.snapshot.params['id']);
    console.log(this.route.snapshot.queryParams['action']);
    this.id = this.route.snapshot.params['id'];
    this.lugar = this.buscarLugar();
  }

  buscarLugar() {
    return this.lugares.filter((lugar) => {return lugar.id == this.id})[0] || null;
  }
}
