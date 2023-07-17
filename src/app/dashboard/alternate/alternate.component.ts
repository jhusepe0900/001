import { Component, OnInit } from '@angular/core';
import * as highchartsData from '../../shared/data/alternate.dashboard';


@Component({
  selector: 'app-alternate',
  templateUrl: './alternate.component.html',
  styleUrls: ['./alternate.component.scss']
})
export class AlternateComponent implements OnInit {

  
  // Chart 1
  public Highcharts1 = highchartsData.Highcharts1;
  public chartOptions1 = highchartsData.chartOptions1;

  
  // Chart 2
  public Highcharts2 = highchartsData.Highcharts2;
  public chartOptions2 = highchartsData.chartOptions2;

  
  // Chart 3
  public Highcharts3 = highchartsData.Highcharts3;
  public chartOptions3 = highchartsData.chartOptions3;

  
  // Chart 4
  public Highcharts4 = highchartsData.Highcharts4;
  public chartOptions4 = highchartsData.chartOptions4;


  
  // Chart 5
  public Highcharts5 = highchartsData.Highcharts5;
  public chartOptions5 = highchartsData.chartOptions5;


  
  // Chart 6
  public Highcharts6 = highchartsData.Highcharts6;
  public chartOptions6 = highchartsData.chartOptions6;

  constructor() { }

  ngOnInit(): void {
  }

}
