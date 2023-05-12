import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngRxjs';
  /* Example 1 */
  postArray = [
    { title: 'Software Engineering', description: 'Software Engineering description' },
    { title: 'Web Development', description: 'Web Development description' },
    { title: 'Database', description: 'Database description' }
  ]; // Iterable Array

  postArrayObservable$ = from(this.postArray); // Converted into Observable

  constructor() {
    this.postArrayObservable$.subscribe({
      next: (data) => console.log(data),
      error: (err) => console.log(err),
      complete: () => console.log('completed')
    });
  }
}
