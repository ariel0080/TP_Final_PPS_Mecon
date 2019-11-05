import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-nombre',
  templateUrl: './input-nombre.component.html',
  styleUrls: ['./input-nombre.component.scss'],
})


export class InputNombreComponent implements OnInit {

  @Output() nombre: EventEmitter<string>;

  cumple = false;

  constructor() { }

  ngOnInit() {}


  v()  {
    
    console.log(this.nombre);

    if(String(this.nombre).length <= 5)
    {
      this.cumple = false;
    } else {this.cumple = true;}

    
    }

}
