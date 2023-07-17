import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orden-modal',
  templateUrl: './orden-modal.component.html',
  styleUrls: ['./orden-modal.component.scss']
})
export class OrdenModalComponent implements OnInit {

  constructor(
    private modal: NgbModal
  ) { }

  ngOnInit(): void {
  }


}
