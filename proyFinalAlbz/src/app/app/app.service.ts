import { Injectable } from '@angular/core';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  carrito: Producto[] = [];

  agregar(producto: Producto): void {
    this.carrito = [...this.carrito, producto];
  }

  quitar(index: number): void {
    this.carrito = this.carrito.filter((_, i) => i !== index);
  }

  vaciar(): void {
    this.carrito = [];
  }

  get total(): number {
    return this.carrito.reduce(
      (suma, producto) => suma + producto.precio, 0
    );
  }
}