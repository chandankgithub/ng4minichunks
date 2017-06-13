import { UserService } from './services/user.service';
import { cardServiceProvider } from './providers/card.service.provider';
import { CardService } from './components/cards/card.service';
import { LoggerService } from './services/logger.service';
import { CardsComponent } from './components/cards/cards.component';

import { HighlightDirective } from './shared/directives/highlight.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    CardsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService, CardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
