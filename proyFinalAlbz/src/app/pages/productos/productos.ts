import { Component } from '@angular/core';
import { Producto } from '../../models/producto';

  export const lista:Producto[]=[
      {id:1,nombre:"CocaCola",precio:6500},
    {id:2,nombre:"Doritos",precio:5000},
    {id:3,nombre:"Takis",precio:4500},
    {id:4,nombre:"Sprite",precio:5500}
  ]
  
@Component({
  imports: [],
  standalone:true,
  selector: 'app-productos',
  styleUrl: './productos.css',
  templateUrl: './productos.html',
})
export class Productos {
  productos=lista;
  onEliminado(id:number): void{
   this.productos= this.productos.filter(
     p => p.id !== id ) 
   }
}
