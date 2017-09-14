import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class LugaresService{
  lugares:any = [
    {id: 1 , plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia', description: 'soy un lindo lugar'},
    {id: 2 , plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita', description: 'soy un lindo lugar'},
    {id: 3 , plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices', description: 'soy un lindo lugar'},
    {id: 4 , plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll', description: 'soy un lindo lugar'},
    {id: 5 , plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia', description: 'soy un lindo lugar'},
    {id: 6 , plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el Clavo', description: 'soy un lindo lugar'},
  ];

  constructor(private afDB: AngularFireDatabase){

  }

  public getLugares() {
    return this.afDB.list('lugares/');
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar) {
    console.log(lugar);
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }
}