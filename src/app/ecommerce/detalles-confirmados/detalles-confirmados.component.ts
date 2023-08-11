import { Component, OnInit } from '@angular/core';
interface Producto {
  nombre: string;
  cantidad: number;
}
@Component({
  selector: 'app-detalles-confirmados',
  templateUrl: './detalles-confirmados.component.html',
  styleUrls: ['./detalles-confirmados.component.scss']
})
export class DetallesConfirmadosComponent implements OnInit {
  productosSofia: any[] = [];
  constructor() {
    this.productosSofia = [
      { nombre: 'Pollo 104', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 105', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 106', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 107', cantidad: 10, precio: 280, cajas: 2, cajasEntregadas: 10 },
      { nombre: 'Pollo 108', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 109', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Menudencia', cantidad: 0, precio: 10, cajas: 2 }
    ]
   }

  ngOnInit(): void {
  }

}
