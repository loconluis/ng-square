import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AutorizacionService {
  constructor(private angularFireAuth: AngularFireAuth, private router: Router) {
    this.isLogged();
  }

  public facebookLogin() {
    this.angularFireAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then((result) => {
        console.log(result);
        alert('Usuario loggeado con facebook');
        this.router.navigate(['lugares']);
      })
      .catch(error => {
        console.log('Error', error);
      });
  }
  public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
    .then( response => {
      alert('usuario inicio sesion con exito');
      // console.log(response);
    })
    .catch( error => { console.log('Error', error); });
    this.router.navigate(['lugares']);
  }

  public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then( response => {
      alert('usuario registrado con exito');
      console.log(response);
    })
    .catch( error => { console.log('Error', error); });
  }

  public isLogged() {
    return this.angularFireAuth.authState;
  }
}
