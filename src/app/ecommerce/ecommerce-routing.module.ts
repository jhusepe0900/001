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
        path: 'clientes-modal-prueba',
        component: ClientModalListPruebaComponent,
        data: {
          title: 'Cliente Modal prueba'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
