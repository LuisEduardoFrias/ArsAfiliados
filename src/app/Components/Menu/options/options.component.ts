import { Component, Input, OnInit } from '@angular/core';
import { OptionsMenu } from 'src/app/Models/optionmenu/OptionsMenu';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  constructor() { }

  ruta: string = "afiliados";

  @Input()
  OptionsMenu: OptionsMenu[];
    
  ngOnInit(): void {
  }

}
