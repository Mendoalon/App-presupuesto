import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from '../../../services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gastos',
  templateUrl: './ingresar-gastos.component.html',
  styleUrls: ['./ingresar-gastos.component.css']
})
export class IngresarGastosComponent implements OnInit {

  nombreGasto: string ='';
  cantidad: number= 0;
  formularioIncorrecto: boolean = false;
  textIncorrecto: string = '';

  constructor(private _presupuestoService: PresupuestoService) { }
  

  ngOnInit(): void {
  }

  agregarGasto(): void{

    if(this.cantidad > this._presupuestoService.restante){
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }


    if (this.nombreGasto ==='' || this.cantidad <= 0) {
        this.formularioIncorrecto = true;
        this.textIncorrecto = 'Nombre de garto o cantida incorrecta.';
    }else{
      this.formularioIncorrecto = false;

      //creamos el objeto
      const gastos = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      //Enviamos el objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(gastos);

      //Reseteamos el formulario.

      this.nombreGasto = ''
      this.cantidad = 0;
    }
  }

}
