import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlternateComponent } from './alternate/alternate.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { HospitalityComponent } from './hospitality/hospitality.component';
import { SalesComponent } from './sales/sales.component';

const routes: Routes = [
  {
    path: '',
    children: [
     
      {
        path: 'analytics',
        component: AnalyticsComponent,
        data: {
          title: 'Analytics'
        }
      },
      {
        path: 'sales',
        component: SalesComponent,
        data: {
          title: 'Sales'
        }
      },
      {
        path: 'e-commerce',
        component: ECommerceComponent,
        data: {
          title: 'e-Commerce'
        }
      },
      {
        path: 'alternate',
        component: AlternateComponent,
        data: {
          title: 'Alternate'
        }
      },
      {
        path: 'hospitality',
        component: HospitalityComponent,
        data: {
          title: 'Hospitality'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
