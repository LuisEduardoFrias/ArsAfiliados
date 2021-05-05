import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  opcion : boolean = false;

  UserName : string = '';

  constructor(public auth : AuthService) {
    
  }

  ClickChangeOpcion() {
    this.opcion = !this.opcion;
  }

  MouseLeaveChangeOpcion() {
    if (this.opcion == true)
      this.opcion = !this.opcion;
  }

}
