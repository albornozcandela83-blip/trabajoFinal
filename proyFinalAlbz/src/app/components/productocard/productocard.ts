import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../models/producto';
@Component({
  imports: [],
  standalone:true,
  selector: 'app-productocard',
  styleUrl: './productocard.css',
  templateUrl: './productocard.html',
})
export class Productocard {
    @Input() producto!: Producto
   @Output() eliminado = new EventEmitter<number>();
   
   OnEliminar(): void{
    this.eliminado.emit(this.producto.id);
   }
}
