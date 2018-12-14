import { CreateFormComponent } from './create-form/create-form.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dynamic Form';
  public formSubmittedData: any;
  public formFieldProperties: any;
  @ViewChild('formData') formData: CreateFormComponent;
  submitForm() {
    this.formSubmittedData = this.formData.formInputData;
    console.log('form: ', this.formData.formInputData);
  }

}
