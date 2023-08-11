import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsDetailsComponent } from './products/products-details/products-details.component';
import { ProductsComponent } from './products/products.component';
import { ClientScreenComponent } from './clients/client-screen/client-screen.component';
import { ClientScreenListComponent} from './clients/client-screen-list/client-screen-list.component';
import { OrdersScreenConfirmadosComponent } from 'src/app/ecommerce/orders/orders-screen-confirmados/orders-screen-confirmados.component';
import { ClientModalListPruebaComponent } from 'src/app/ecommerce/clients/client-modal-list-prueba/client-modal-list-prueba.component';
import { OrdersScreenCrearOrdenComponent } from 'src/app/ecommerce/orders/orders-screen-crear-orden/orders-screen-crear-orden.component';
import { CompraComponent } from 'src/app/ecommerce/compra/compra.component';
import { SaldosComponent } from 'src/app/ecommerce/saldos/saldos.component';
import { ExceltestComponent } from 'src/app/ecommerce/exceltest/exceltest.component';
import { PantallaDespachoTiendaComponent} from 'src/app/ecommerce/pantalla-despacho-tienda/pantalla-despacho-tienda.component';
import { PantallaDespachoCejaComponent } from 'src/app/ecommerce/pantalla-despacho-ceja/pantalla-despacho-ceja.component';
import { PantallaDespachoVentillaComponent } from 'src/app/ecommerce/pantalla-despacho-ventilla/pantalla-despacho-ventilla.component';
import { DetallesConfirmadosComponent } from 'src/app/ecommerce/detalles-confirmados/detalles-confirmados.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'products-details',
        component: ProductsDetailsComponent,
        data: {
          title: 'Products Details'
        }
      },
      {
        path: 'add-new-products',
        component: AddNewProductsComponent,
        data: {
          title: 'Add New Products'
        }
      },
      {
        path: 'orders',
        component: OrdersComponent,
        data: {
          title: 'Orders'
        }
      },
      {
        path: 'clients',
        component: ClientScreenComponent,
        data: {
          title: 'Clients'
        }
      },
      {
        path: 'listar-clientes',
        component: ClientScreenListComponent,
        data: {
          title: 'Listar Clientes'
        }
      },
      {
        path: 'ordenes-confirmadas',
        component: OrdersScreenConfirmadosComponent,
        data: {
          title: 'Listar Clientes'
        }
      },
      {
        path: 'crear-orden',
        component: OrdersScreenCrearOrdenComponent
      },
      {
        path: 'compra',
        component: CompraComponent
      },
      {
        path: 'saldos',
        component: SaldosComponent
      },
      {
        path: 'excel',
        component: ExceltestComponent
      },
      {
        path: 'pantalla-despacho-tieda-senkata',
        component: PantallaDespachoTiendaComponent
      },
      {
        path: 'pantalla-despacho-ceja',
        component: PantallaDespachoCejaComponent
      },
      {
        path: 'pantalla-despacho-ventilla',
        component: PantallaDespachoVentillaComponent
      },
      {
        path: 'detalles-confirmados',
        component: DetallesConfirmadosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
