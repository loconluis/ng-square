import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AutorizacionService {
  constructor(private angularFireAuth: AngularFireAuth) {}

  public login = (email, password) => {
    console.log('Metodo de Login');
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( response => {
      alert('usuario registrado con exito');
      console.log(response);
    })
    .catch( error => { console.log('Error', error); });
  }
}
