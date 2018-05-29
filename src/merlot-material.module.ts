import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { MerlotMaterial } from './merlot-material.service';
import { InputComponent } from './components/input/input.component';
import { MatInputModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatSelectModule, MatSliderModule } from '@angular/material';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';

@NgModule({
  imports: [
    MatCheckboxModule,
    MatChipsModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    CommonModule,
    FormsModule
  ],
  providers: [MerlotMaterial],
  declarations: [SliderComponent, InputComponent, CheckboxComponent, ChipInputComponent, MultiselectComponent],
  entryComponents: [
    CheckboxComponent,
    ChipInputComponent,
    InputComponent,
    MultiselectComponent,
    SliderComponent
  ]
})
export class MerlotMaterialModule { }
