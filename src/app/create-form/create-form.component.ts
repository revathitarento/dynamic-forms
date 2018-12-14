import { Component, OnInit, Input } from '@angular/core';
import { FormField } from './formField';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  public formInputData = {};
  formField = FormField;
  constructor() { }
  @Input() formFieldProperties: any;
  ngOnInit() {
    const flexiConfig = {
      'items': [
        {
          'name': 'personname',
          'label': 'Person\'s Name',
          'type': 'TextField'
        },
        {
          'name': 'states',
          'label': 'Person\'s state',
          'type': 'DropDown',
          'values': [
            'Maharashtra',
            'Kerala',
            'Tamil Nadu'
          ]
        }
      ]
    };
    this.formFieldProperties = flexiConfig.items;
  }
}
