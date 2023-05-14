import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-memory-leakage',
  templateUrl: './memory-leakage.component.html',
  styleUrls: ['./memory-leakage.component.css']
})
export class MemoryLeakageComponent implements OnInit{
  timerConsoleSubscription!: Subscription;
  timerBrowserSubscription!: Subscription;
  timer: number[] = [];
  constructor() { }
  ngOnInit(){
    let newObservables = new Observable<number>(observer => {
      let i = 0;
      let interval = setInterval(() => {
        console.log("Enter interval");
        observer.next(i++);
      }, 1000);

      return () => {
        console.log("called clear interval");
        clearInterval(interval);
      };
    });

    this.timerBrowserSubscription = newObservables.subscribe(data => {
      console.log(data);
      this.timer.push(data);
    });

    this.timerConsoleSubscription = newObservables.subscribe(data => {
      console.log(data);
    });
  }

  clearSubscription() {
    this.timerBrowserSubscription.unsubscribe();
    this.timerConsoleSubscription.unsubscribe();
  }

}
