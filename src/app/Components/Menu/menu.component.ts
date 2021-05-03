import { Component, OnInit } from '@angular/core';
import { OptionsMenu } from 'src/app/Models/optionmenu/OptionsMenu';
import { SubMenu } from 'src/app/Models/optionmenu/SubMenu';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor( private auth : AuthService) { }

  OptionsMenu: OptionsMenu[];

  //menu options for administrators
  MenuOptionsForAdm: OptionsMenu[] = [
    new OptionsMenu("Afiliados", "", "person_outline",
      [ new SubMenu("Afiliados", "afiliados", "person_outline"),
        new SubMenu("Crear Afiliados", "afiliados/crear", "person_add_alt"),
        new SubMenu("Actualizar Monto", "afiliafos/actualizar/monto", "update")]),
    
    new OptionsMenu("Sucursales", "", "person_outline",
      [ new SubMenu("Sucursales", "sucursales", "person_outline"),
        new SubMenu("Create", "sucursales/crear", "person_outline")]),
      
    new OptionsMenu("Plan", "", "person_outline",
      [ new SubMenu("Planes", "planes", "person_outline"),
        new SubMenu("Crear Plan", "planes/crear", "person_add_alt"),])

  ]

  //menu options for affiliates
  MenuOptionsForAffiliates: OptionsMenu[] = [
    new OptionsMenu("Perfil", "Perfil", "person_outline",null),
    
    new OptionsMenu("Facturas", "", "person_outline",
      [ new SubMenu("Ver Facturas", "facturas", "person_outline"),
        new SubMenu("Crear Facturas", "facturas/crear", "person_add_alt")]),

    new OptionsMenu("Sucursales", "", "person_outline",
      [ new SubMenu("Ver Sucursales", "sucursales", "person_outline")])
  ]

  //menu options for branches
  MenuOptionsForBranches: OptionsMenu[] = [
    new OptionsMenu("ver Perfil", "Perfil", "person_outline",null),
    
    new OptionsMenu("Service", "", "person_outline",
      [ new SubMenu("Ver Service", "service", "person_outline"),
        new SubMenu("Crear Service", "service/crear", "person_add_alt")]),
  ]

  ngOnInit(): void {

    debugger;

    if (this.auth.Rol === "Adm") {
      this.OptionsMenu = this.MenuOptionsForAdm;
    }
    else if (this.auth.Rol === "Affiliates") {
      this.OptionsMenu = this.MenuOptionsForAffiliates;
    }
    else if (this.auth.Rol === "Branche") {
      this.OptionsMenu = this.MenuOptionsForBranches;
    }

  }

}
