import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EcommerceRoutingModule } from './ecommerce-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { OrdersComponent } from './orders/orders.component';
import { OrdenModalComponent } from './orders/orden-modal/orden-modal.component';
import { OrdenScreenComponent } from './orders/orden-screen/orden-screen.component';
import { ClientScreenComponent } from './clients/client-screen/client-screen.component';
import { ClientScreenListComponent } from './clients/client-screen-list/client-screen-list.component';
import { OrdersScreenConfirmadosComponent } from './orders/orders-screen-confirmados/orders-screen-confirmados.component';
import { ClientModalListPruebaComponent } from './clients/client-modal-list-prueba/client-modal-list-prueba.component';
import {NgComponentsModule} from "../ng-components/ng-components.module";
import { OrdersScreenCrearOrdenComponent } from './orders/orders-screen-crear-orden/orders-screen-crear-orden.component';
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";
import { CompraComponent } from './compra/compra.component';
import { SaldosComponent } from './saldos/saldos.component';
import { ExceltestComponent } from './exceltest/exceltest.component';
import { PantallaDespachoTiendaComponent } from './pantalla-despacho-tienda/pantalla-despacho-tienda.component';
import { PantallaDespachoCejaComponent } from './pantalla-despacho-ceja/pantalla-despacho-ceja.component';
import { PantallaDespachoVentillaComponent } from './pantalla-despacho-ventilla/pantalla-despacho-ventilla.component';
import { DetallesConfirmadosComponent } from './detalles-confirmados/detalles-confirmados.component';
import { AutoSumDirective } from './auto-sum.directive';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductsDetailsComponent,
    AddNewProductsComponent,
    OrdersComponent,
    OrdenModalComponent,
    OrdenScreenComponent,
    ClientScreenComponent,
    ClientScreenListComponent,
    OrdersScreenConfirmadosComponent,
    ClientModalListPruebaComponent,
    OrdersScreenCrearOrdenComponent,
    CompraComponent,
    SaldosComponent,
    ExceltestComponent,
    PantallaDespachoTiendaComponent,
    PantallaDespachoCejaComponent,
    PantallaDespachoVentillaComponent,
    DetallesConfirmadosComponent,
    AutoSumDirective
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule,
    NgComponentsModule,
    NgbDropdownModule,
    FormsModule
  ]
})
export class EcommerceModule { }
