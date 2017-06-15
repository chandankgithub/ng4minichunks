import { carComponents, carServices } from './components/hierachial-di/cars.component';
import { CardsComponent } from './components/cards/cards.component';

import { HighlightDirective } from './shared/directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CardsComponent,
    carComponents,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    carServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
