import { Injectable } from '@angular/core';

import { SliderComponent } from './components/slider/slider.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipInputComponent } from './components/chip-input/chip-input.component';

@Injectable()
export class MerlotMaterial {

  public templates: any[] = [
    { name: 'checkbox', component: CheckboxComponent },
    { name: 'chipsInput', component: ChipInputComponent },
    { name: 'input', component: InputComponent },
    { name: 'slider', component: SliderComponent }
  ];

  public defaultTemplates: any = { 'String': InputComponent, 'Number': InputComponent, 'Boolean': CheckboxComponent };

  constructor() { }

}
