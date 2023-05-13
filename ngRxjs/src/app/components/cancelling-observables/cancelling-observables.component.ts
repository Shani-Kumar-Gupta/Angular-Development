import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-cancelling-observables',
  templateUrl: './cancelling-observables.component.html',
  styleUrls: ['./cancelling-observables.component.css']
})
export class CancellingObservablesComponent implements OnInit {
  timerSubscription!: Subscription;
  constructor() { }
  ngOnInit(){
    const newObservables = interval(1000);
    this.timerSubscription = newObservables.subscribe((data) => {
      console.log(new Date().toLocaleTimeString() + ' ' + data);
    })
  }

  cancelTimer() {
    console.log("Cancel the observables");
    this.timerSubscription.unsubscribe();
  }

}
