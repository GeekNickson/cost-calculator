import {Injectable} from '@angular/core';
import {CostCalculator} from './cost-calculator.interface';
import {Cost, CostType} from '../interfaces/cost.interface';

@Injectable({
  providedIn: 'root',
})
export class RzhdCostCalculatorService implements CostCalculator {
  constructor() {
  }

  calculateEconom(distance: number, age: number, weight: number): Cost {
    if (weight > 50) {
      return {type: CostType.Econom, price: 0};
    }
    let cost = distance * 0.5;
    if (age < 5) {
      cost *= 0.5;
    }
    if (weight > 15) {
      const luggageCost = weight * 50;
      cost += luggageCost;
    }
    return {type: CostType.Econom, price: cost};
  }

  calculateAdvanced(distance: number, age: number, weight: number): Cost {
    if (weight > 60) {
      return {type: CostType.Advanced, price: 0};
    }
    let cost = distance * 2;
    if (age < 8) {
      cost *= 0.7;
    }
    if (weight > 20) {
      const luggageCost = weight * 50;
      cost += luggageCost;
    }
    return {type: CostType.Advanced, price: cost};
  }

  calculateLux(distance: number, age: number, weight: number): Cost {
    if (weight > 60) {
      return {type: CostType.Lux, price: 0};
    }
    let cost = distance * 4;
    if (age < 16) {
      cost *= 0.8;
    }
    return {type: CostType.Lux, price: cost};
  }
}
