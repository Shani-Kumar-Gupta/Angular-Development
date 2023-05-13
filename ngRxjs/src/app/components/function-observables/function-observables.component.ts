import { Component, OnInit } from '@angular/core';
import { fn, fnObservables } from 'src/app/services/Fn';

@Component({
  selector: 'app-function-observables',
  templateUrl: './function-observables.component.html',
  styleUrls: ['./function-observables.component.css']
})
export class FunctionObservablesComponent implements OnInit {
  /* Difference Between Function and Observables 
  - Function returns only single value
  - Observables retuens multiple values and it's a collection of lazy values
  */
  
  constructor() {
    console.log("before function call");
    console.log(fn());
    console.log(fn());
    console.log("After function call");

    console.log("before Observables call");
    fnObservables.subscribe(data => {
      console.log(data);
    });

    fnObservables.subscribe(data => {
      console.log(data);
    });
    console.log("After Observables call");
  }
  
  ngOnInit(){
      
  }
}
