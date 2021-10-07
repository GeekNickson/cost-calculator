import {Injectable} from '@angular/core';
import {CostCalculator} from './cost-calculator.interface';
import {Cost, CostType} from '../interfaces/cost.interface';

@Injectable({
  providedIn: 'root',
})
export class AeroflotCostCalculatorService implements CostCalculator {
  constructor() {
  }

  calculateEconom(distance: number, age: number, weight: number): Cost {
    if (weight > 20) {
      return {type: CostType.Econom, price: 0};
    }

    let cost = distance * 4;
    if (weight > 5) {
      cost += 4000;
    }
    return {type: CostType.Econom, price: cost};
  }

  calculateAdvanced(distance: number, age: number, weight: number): Cost {
    if (weight > 50) {
      return {type: CostType.Advanced, price: 0};
    }

    let cost = distance * 8;
    if (age < 7) {
      cost *= 0.7;
    }
    if (weight > 20) {
      cost += 5000;
    }
    return {type: CostType.Advanced, price: cost};
  }

  calculateLux(distance: number, age: number, weight: number): Cost {
    if (weight > 50) {
      return {type: CostType.Lux, price: 0};
    }
    let cost = distance * 15;
    if (age < 16) {
      cost *= 0.7;
    }
    return {type: CostType.Lux, price: cost};
  }
}
