import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Observer4 } from 'src/app/services/Observer4';

@Component({
  selector: 'app-new-observables',
  templateUrl: './new-observables.component.html',
  styleUrls: ['./new-observables.component.css']
})
export class NewObservablesComponent implements OnInit {
  constructor() { }
  /* TWO ways to create a new observables
  1. Using Observables cnstructor using new keyword
  */
  ngOnInit() {
    let observer = {
      next: (data: number) => console.log("Observer 1: ", data),
      error: (error: string) => console.log(error),
      complete: () => console.log('completed')
    };
    const newObservables = new Observable<number>(observer => {
      for (let i = 0; i < 5; i++) {
        observer.next(i);
      }
      observer.complete();
    });

    /* Different ways of creating observer */
    newObservables.subscribe(observer);
    newObservables.subscribe({
      next: (data: number) => console.log("Observer 2: ", data),
      error: (error: string) => console.log(error),
      complete: () => console.log('completed')
    });

    newObservables.subscribe((data) => console.log("Observer 3: ", data), (error) => console.log(error), () => console.log('completed'));

    newObservables.subscribe(new Observer4());
  }
}
