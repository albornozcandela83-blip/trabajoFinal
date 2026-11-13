import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule],
  selector: 'app-contacto',
  styleUrl: './contacto.css',
  templateUrl: './contacto.html',
})
export class Contacto {
  nombre = '';
  email = '';
  mensaje = '';

  enviarMensaje(): void {
    alert('¡Gracias por comunicarte con nosotros!');
    this.nombre = '';
    this.email = '';
    this.mensaje = '';
  }

}
