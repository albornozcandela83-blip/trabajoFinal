import { Component } from '@angular/core';
import { Productocard } from '../../components/productocard/productocard';
import { lista } from '../productos/productos';
import { Producto } from '../../models/producto';
import { RouterLink } from '@angular/router';
import { CarritoService } from '../../app/app.service';

@Component({
  imports: [Productocard,RouterLink],
  standalone:true,
  selector: 'app-inicio',
  styleUrl: './inicio.css',
  templateUrl: './inicio.html',
})
export class Inicio {
  productos= lista.slice(0,4)

  constructor(public carritoService: CarritoService) {}

  agregarAlCarrito(producto: Producto): void {
    this.carritoService.agregar(producto);
  }
}
