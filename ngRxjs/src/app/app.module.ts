import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewObservablesComponent } from './components/new-observables/new-observables.component';
import { FunctionObservablesComponent } from './components/function-observables/function-observables.component';
import { CancellingObservablesComponent } from './components/cancelling-observables/cancelling-observables.component';
import { MemoryLeakageComponent } from './components/memory-leakage/memory-leakage.component';

@NgModule({
  declarations: [
    AppComponent,
    NewObservablesComponent,
    FunctionObservablesComponent,
    CancellingObservablesComponent,
    MemoryLeakageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
