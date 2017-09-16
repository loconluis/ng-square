import { Injectable } from '@angular/core';

@Injectable()
export class AutorizacionService {
  public login = (email, password) => {
    console.log('Metodo de Login');
  }

  public registro = (email, password) => {
    console.log('Metodo de registro');
  }
  constructor() { }
}
