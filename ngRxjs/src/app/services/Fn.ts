import { Observable } from "rxjs";

export function fn() {
  console.log("fn called!");
  return '1';
  // return '2';
}

export const fnObservables = new Observable(observer => {
  console.log("Observables called!");
  observer.next('1');
  observer.next('2');
  setTimeout(() => {
    observer.next('3');
  }, 2000);
});