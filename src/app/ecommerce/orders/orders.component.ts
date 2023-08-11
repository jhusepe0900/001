
import {Component, OnInit} from '@angular/core';
import { OrdenScreenComponent } from './orden-screen/orden-screen.component';
import { ToastService } from 'src/app/ng-components/toast/toast-service';
import { Router } from '@angular/router';
@Component({  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  public ordenScreenComponent: OrdenScreenComponent;
  public item: any;
  constructor(
    public toastService: ToastService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarPedidos();
  }
  public crearOrden(){
    this.router.navigate(['/ecommerce/crear-orden']);
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
