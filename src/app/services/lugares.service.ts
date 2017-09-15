import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LugaresService{
  API_ENDPOINT = 'https://platzisquare-1505192655142.firebaseio.com';

  lugares:any = [
    {id: 1 , plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria la gardenia', description: 'soy un lindo lugar'},
    {id: 2 , plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pasadita', description: 'soy un lindo lugar'},
    {id: 3 , plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterinaria Huellitas Felices', description: 'soy un lindo lugar'},
    {id: 4 , plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Sushiroll', description: 'soy un lindo lugar'},
    {id: 5 , plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la Gracia', description: 'soy un lindo lugar'},
    {id: 6 , plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el Clavo', description: 'soy un lindo lugar'},
  ];

  constructor(private afDB: AngularFireDatabase, private http: Http){

  }

  public getLugares() {
    // recibiendo datos a traves de sockets
    // return this.afDB.list('lugares/');

    // recibiendo datos a traves de http
    // return this.http.get(this.API_ENDPOINT+'/lugares.json');
    return this.http.get(this.API_ENDPOINT+'/.json')
      .map((resultado) => {
        const data = resultado.json().lugares;
        return data;
      });
  }

  public buscarLugar(id) {
    return this.lugares.filter((lugar) => {return lugar.id == id})[0] || null;
  }

  public guardarLugar(lugar) {
    // enviando datos a traves de sockets
    // this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);

    // enviando datos a traves de HTTP
    const headers = new Headers({ "Content-Type": "application/json" });
    return this.http.post(this.API_ENDPOINT+'/lugares.json', lugar, {headers: headers} )
  }

  public editarLugar(lugar) {
    this.afDB.database.ref(`lugares/${lugar.id}`).set(lugar);
  }

  public obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    return this.http.get(`http://maps.google.com/maps/api/geocode/json?address=${direccion}`);
  }

  public getLugar(id) {
    return this.afDB.object(`lugares/${id}`);
  }



}