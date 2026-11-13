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

  @Output() agregar = new EventEmitter<Producto>();

  agregarAlCarrito(): void {
    this.agregar.emit(this.producto);
} 
  }
