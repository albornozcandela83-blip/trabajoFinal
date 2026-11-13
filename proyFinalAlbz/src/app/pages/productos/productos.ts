import { Component } from '@angular/core';
import { Producto } from '../../models/producto';
import { Productocard } from '../../components/productocard/productocard';
import { CarritoService } from '../../app/app.service';


  export const lista: Producto[] = [
  { id: 1, nombre: "Torta Matilda", precio: 40000, url: "https://i.pinimg.com/736x/4c/cb/66/4ccb66d2ae2e0562ff29d92cc97534fc.jpg" },
  { id: 2, nombre: "Torta de frutillas", precio: 40000, url: "https://i.pinimg.com/736x/d5/40/6f/d5406fc1c54950dc45c406d23f0d6edf.jpg" },
  { id: 3, nombre: "Cookies", precio: 5000, url: "https://i.pinimg.com/1200x/76/ec/c4/76ecc4da24ca08f731f4c0c9f4f831bc.jpg" },
  { id: 4, nombre: "Brownies", precio: 5500, url: "https://i.pinimg.com/736x/81/1f/47/811f47bd39173689915e1ea5c263de3d.jpg" },
  { id: 5, nombre: "Cheesecake de frutos rojos", precio: 42000, url: "https://i.pinimg.com/1200x/8d/58/9a/8d589a85c9f755cd00c401137401d667.jpg" },
  { id: 6,nombre: "Lemon Pie",precio: 38000,url: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13"},
  { id: 7,nombre: "Macarrons",precio: 6000,url: "https://i.pinimg.com/1200x/3a/73/b6/3a73b6ef9f1e8ec89f2220e191d9b0d3.jpg"},
  { id: 8, nombre: "Cupcakes de vainilla", precio: 4000, url: "https://i.pinimg.com/1200x/de/7c/c2/de7cc26014074224210924ddc1dacacc.jpg" }
]; 

@Component({
  imports: [Productocard],
  standalone: true,
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})

export class Productos {
  lista = [...lista];

  carrito: Producto[] = [];

agregarAlCarrito(producto: Producto): void {
  this.carrito = [...this.carrito, producto];
}

quitarDelCarrito(index: number): void {
  this.carrito = this.carrito.filter((_, i) => i !== index);
}

vaciarCarrito(): void {
  this.carrito = [];
}

get total(): number {
  return this.carrito.reduce((suma, producto) => suma + producto.precio, 0);
}


}
