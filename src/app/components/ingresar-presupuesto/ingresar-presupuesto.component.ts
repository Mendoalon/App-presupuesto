import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent implements OnInit {

  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor( private _presupuestoService: PresupuestoService,
               private _Router :Router ){ 
    this.cantidad = 0;
    this.cantidadIncorrecta = false;
  }

  ngOnInit(): void {
  }

  agregar(): void {
    if(this.cantidad > 0 ){
      this.cantidadIncorrecta = false;
      this._presupuestoService.presupuesto = this.cantidad;
      this._presupuestoService.restante = this.cantidad;
      this._Router.navigate(['/gastos']);
    }else{
      this.cantidadIncorrecta = true;

  }
  

}
}
