import { Component, OnInit } from '@angular/core';

interface Cliente {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.component.html',
  styleUrls: ['./saldos.component.scss']
})
export class SaldosComponent implements OnInit {

  clienteSeleccionado: Cliente | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
