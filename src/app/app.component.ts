import { Component } from '@angular/core';
import { AutorizacionService } from './services/autorizacion.service';
// tslint:disable-next-line:import-blacklist


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loggedIn = false;
  emailLoggedUser: any = {};

  constructor(private autorizacionService: AutorizacionService) {
    this.autorizacionService.isLogged()
      .subscribe( result => {
        if (result && result.uid) {
          this.loggedIn = true;
          this.emailLoggedUser = this.autorizacionService.getUser().currentUser.email;
        }else {
          this.loggedIn = false;
        }
      }, error => {
        this.loggedIn = false;
      });
  }

  logout() {
    this.autorizacionService.logout();
  }

  getUser() {
    console.log(this.autorizacionService.getUser());
  }
}
