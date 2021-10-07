import {Cost} from '../interfaces/cost.interface';

export declare interface CostCalculator {
  calculateEconom(distance: number, age: number, weight: number): Cost;

  calculateAdvanced(distance: number, age: number, weight: number): Cost;

  calculateLux(distance: number, age: number, weight: number): Cost;
}
