import { Component, OnInit } from '@angular/core';
import * as highchartsData from '../../shared/data/sales.highchartsData';



@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {


  
  // Chart 1
  public Highcharts1 = highchartsData.Highcharts1;
  public chartOptions1 = highchartsData.chartOptions1;

  
  // Chart 2
  public Highcharts2 = highchartsData.Highcharts2;
  public chartOptions2 = highchartsData.chartOptions2;


  constructor() { }

  ngOnInit(): void {
    $.getScript('./assets/js/sales-dashboars.js')
  }

}
