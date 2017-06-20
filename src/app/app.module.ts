import { carComponents, carServices } from './components/hierachial-di/cars.component';
import { CardsComponent } from './components/cards/cards.component';

import { HighlightDirective } from './shared/directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { NgOnChangesParentComponent } from './ng-lifecycles/ngOnChanges/parent-component/ngonchanges-parent.component';
import { NgOnchangesChildComponent } from "app/ng-lifecycles/ngOnChanges/children-component/ngonchanges-child.component";

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CardsComponent,
    carComponents,
    NgOnChangesParentComponent,
    NgOnchangesChildComponent,
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
