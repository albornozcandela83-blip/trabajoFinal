import { Component } from '@angular/core';
import { Productocard } from '../../components/productocard/productocard';
import { lista } from '../productos/productos';


@Component({
  imports: [Productocard],
  standalone:true,
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
productos=lista;
onEliminarProducto(id: number): void {
    this.productos = this.productos.filter(p => p.id !== id);
  }

}
