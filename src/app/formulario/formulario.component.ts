import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nombre: string = '';
  email: string = '';

  constructor(private router: Router) {}

  confirmarEnvio() {
    if (confirm('¿Estás seguro de enviar el formulario?')) {
      console.log('Formulario enviado');
      console.log(`Nombre: ${this.nombre}`);
      console.log(`Email: ${this.email}`);

      this.router.navigate(['/nueva-ventana'], {
        queryParams: { nombre: this.nombre, email: this.email }
      });
    }
  }
}
