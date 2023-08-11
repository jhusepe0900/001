import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orders-screen-confirmados',
  templateUrl: './orders-screen-confirmados.component.html',
  styleUrls: ['./orders-screen-confirmados.component.scss']
})
export class OrdersScreenConfirmadosComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  irDetalles(){
    this.router.navigate(['/ecommerce/detalles-confirmados']);
  }

}
