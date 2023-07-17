import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HighchartsChartModule } from 'highcharts-angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { SalesComponent } from './sales/sales.component';
import { AlternateComponent } from './alternate/alternate.component';
import { HospitalityComponent } from './hospitality/hospitality.component';


@NgModule({
  declarations: [
    AnalyticsComponent, 
    ECommerceComponent, SalesComponent, AlternateComponent, HospitalityComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    PerfectScrollbarModule,
    HighchartsChartModule
  ]
})
export class DashboardModule { }
