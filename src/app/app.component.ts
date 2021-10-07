import {Component, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AeroflotCostCalculatorService} from './services/aeroflot-cost-calculator.service';
import {CostForm} from './interfaces/cost-form.interface';
import {Cost} from './interfaces/cost.interface';
import {RzhdCostCalculatorService} from './services/rzhd-cost-calculator.service';
import {from, Observable, of} from "rxjs";
import {map, mergeAll, reduce, tap} from "rxjs/internal/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form: FormGroup = this.formBuilder.group({
    distance: ['', [Validators.min(0), Validators.required]],
    age: ['', [Validators.min(0), Validators.required]],
    weight: ['', [Validators.min(0), Validators.required]],
  });

  data: Map<string, Cost[]> = new Map();

  constructor(
    private formBuilder: FormBuilder,
    private aeroflotCostService: AeroflotCostCalculatorService,
    private rzhdCostService: RzhdCostCalculatorService,
    private element: ElementRef
  ) {
  }

  public getCosts(): void {
    this.data.clear();
    if (this.form.valid) {
      const {distance, age, weight} = this.form.value as CostForm;

      const costsAero = Array.of(
        this.aeroflotCostService.calculateEconom(distance, age, weight),
        this.aeroflotCostService.calculateAdvanced(distance, age, weight),
        this.aeroflotCostService.calculateLux(distance, age, weight)
      );
      this.data.set('Аэрофлот', costsAero);

      const costsRzhd = Array.of(
        this.rzhdCostService.calculateEconom(distance, age, weight),
        this.rzhdCostService.calculateAdvanced(distance, age, weight),
        this.rzhdCostService.calculateLux(distance, age, weight)
      );
      this.data.set('РЖД', costsRzhd);
    } else {
      const firstInvalid =
        this.element.nativeElement.querySelector('form .ng-invalid')[0];
      firstInvalid.scrollIntoView({behavior: 'smooth'});
      firstInvalid.focus();
    }
  }

  public isVisible(costs: Cost[]): boolean {
    return Boolean(costs.reduce((acc, curr) => acc += curr.price, 0));
  }

  public showSuggestions(): Observable<boolean> {
    const totalCosts = Array.from(this.data.values());
    return from(totalCosts).pipe(
      mergeAll(),
      reduce((acc, val: Cost) => acc += val.price, 0),
      map((val) => Boolean(val))
    )
  }
}
