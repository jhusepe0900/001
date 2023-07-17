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
    ClientModalListPruebaComponent
  ],
  imports: [
    CommonModule,
    EcommerceRoutingModule
  ]
})
export class EcommerceModule { }
