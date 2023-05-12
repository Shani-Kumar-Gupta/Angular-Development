import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewObservablesComponent } from './components/new-observables/new-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservablesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
