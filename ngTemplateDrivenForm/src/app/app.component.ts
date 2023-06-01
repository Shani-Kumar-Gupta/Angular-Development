import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngTemplateDrivenForm';
  @ViewChild('myForm') myForm!: NgForm;

  // onFormSubmit(form: HTMLFormElement) { // Passing Template Reference Variable
  //   console.log('Form submission!', form);
  // }

  onFormSubmit(form: NgForm) { // Passing Template Reference Variable
    console.log('Form submission!', form, this.myForm);
  }
}
