import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PriceDisplayComponent} from './components/price-display/price-display.component';
import {FormInputComponent} from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    PriceDisplayComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
