import { Component, OnInit } from '@angular/core';

interface Producto {
  nombre: string;
  cantidad: number;
}

interface Cliente {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-orders-screen-crear-orden',
  templateUrl: './orders-screen-crear-orden.component.html',
  styleUrls: ['./orders-screen-crear-orden.component.scss']
})
export class OrdersScreenCrearOrdenComponent implements OnInit {

  isCheckedSofia: boolean = false;
  isCheckedPiolindo: boolean = false;
  isCheckedRiquipollo: boolean = false;
  productosSofia: any[] = [];
  clienteSeleccionado: Cliente | null = null;

  constructor() {
    this.productosSofia = [
      { nombre: 'Pollo 104', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 105', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 106', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 107', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 108', cantidad: 0, precio: 10, cajas: 2 },
      { nombre: 'Pollo 109', cantidad: 0, precio: 10, cajas: 2 },
      // Agrega aquí los demás productos para Sofia
    ];
   }

  ngOnInit(): void {
  }

  productosPiolindo: Producto[] = [];
  productosRiquipollo: Producto[] = [];

  guardarPedido(): void {
    if (this.clienteSeleccionado === null) {
      alert('Debe seleccionar un cliente');
      console.log('Debe seleccionar un cliente.');
      return;
    }

    console.log('Cliente seleccionado:', this.clienteSeleccionado);

    if (this.isCheckedSofia) {
      const productosSeleccionados = [];

      // Filtrar los productos marcados para Sofia
      this.productosSofia = this.productosSofia.filter(producto => producto.checked);

      console.log('Productos seleccionados para Sofia:', this.productosSofia);
    }
    if (this.isCheckedPiolindo) {
      // Si está marcado, guardamos los productos seleccionados para Piolindo
      console.log('Productos seleccionados para Piolindo:', this.productosPiolindo);
    }
    if (this.isCheckedRiquipollo) {
      // Si está marcado, guardamos los productos seleccionados para Riquipollo
      console.log('Productos seleccionados para Riquipollo:', this.productosRiquipollo);
    }
  }
}

