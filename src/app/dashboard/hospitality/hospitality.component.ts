import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hospitality',
  templateUrl: './hospitality.component.html',
  styleUrls: ['./hospitality.component.scss']
})
export class HospitalityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript('./assets/js/hospitality-dashboard.js')
  }

}
