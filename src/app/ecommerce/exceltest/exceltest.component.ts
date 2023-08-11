import { Component } from '@angular/core';
import { AutoSumDirective } from './../auto-sum.directive';

@Component({
  selector: 'app-exceltest',
  templateUrl: './exceltest.component.html',
  styleUrls: ['./exceltest.component.scss']
  // Agrega la directiva al array de declarations

})
export class ExceltestComponent {

  constructor(){

  }

  inputValues: number[] = [0, 0, 0, 0, 0, 0];
  total: number = 0;
}
