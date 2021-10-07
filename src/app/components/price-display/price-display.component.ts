import {Component, Input, OnInit} from '@angular/core';
import {Cost} from '../../interfaces/cost.interface';

@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.scss'],
})
export class PriceDisplayComponent implements OnInit {
  @Input()
  title = '';
  @Input()
  costs: Cost[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }
}
