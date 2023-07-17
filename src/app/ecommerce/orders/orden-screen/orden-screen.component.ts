import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orden-screen',
  templateUrl: './orden-screen.component.html',
  styleUrls: ['./orden-screen.component.scss']
})
export class OrdenScreenComponent implements OnInit {
  public item: any;
  public items: any[];
  constructor() { }

  ngOnInit(): void {
  }

  public recibeDatos(data: any){
    this.item = data;
    console.log(data);
  }
}
