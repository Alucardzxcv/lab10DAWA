import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nueva-ventana',
  templateUrl: './nueva-ventana.component.html',
  styleUrls: ['./nueva-ventana.component.css']
})
export class NuevaVentanaComponent implements OnInit {
  nombre: string = '';
  email: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.nombre = params['nombre'];
      this.email = params['email'];
    });
  }
}
