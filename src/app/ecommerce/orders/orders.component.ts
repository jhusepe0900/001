
import {Component, OnInit} from '@angular/core';
import { OrdenScreenComponent } from './orden-screen/orden-screen.component';
@Component({  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public ordenScreenComponent: OrdenScreenComponent;
  public item: any;
  constructor() { }

  ngOnInit(): void {
    console.log('imprime automaticamente');
    this.listarPedidos();
  }
  public crearOrden(){
    this.ordenScreenComponent.recibeDatos(this.item);
    console.log('PruebaAAAA');
  }
  public listarPedidos(){
    console.log('listar pedidos');
    return null;
  }
  public filtrarPedidos(item: any){
    console.log('filtrar');
    return null;
  }
}
