import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-multiselect',
  template: `<mat-form-field>
              <mat-select [placeholder]="ui.label" [(ngModel)]="transformediModel" (ngModelChange)="updateModel($event)" multiple>
                <mat-option *ngFor="let entry of schema.enum" [value]="entry">{{entry}}</mat-option>
              </mat-select>
            </mat-form-field>
            <mat-error *ngIf="control.errors.required">Dieser Wert ist eine Pflichtangabe.</mat-error>
            <mat-error *ngIf="control.errors.minNumber">Es müssen mindestens {{
              control.errors.minNumber.requiredElements}} Elemente ausgewählt werden.</mat-error>
            <mat-error *ngIf="control.errors.enumValidator">Dieser Wert ist nicht zulässig. Erlaubte Werte sind: {{
              control.errors.enumValidator.allowedValues.join(", ") }}</mat-error>`
})
export class MultiselectComponent implements OnInit {
  @Input('control') control: FormControl | any;
  @Input('iModel') iModel: any;
  @Input('schema') schema: any;
  @Output() ngModelChange = new EventEmitter();
  public ui: any;
  public transformediModel: any = [];

  constructor() { }

  ngOnInit() {
    this.iModel.controls.forEach((element: any) => {
      this.transformediModel.push(element.value);
    });
    this.ui = this.schema.ui || {};
  }

  updateModel($event: any) {
    this.iModel.controls = [];
    $event.forEach((element: any) => {
      this.iModel.push(new FormControl(element));
    });
    if (!this.iModel.controls.length) {
      this.iModel.push(new FormControl());
    }
    this.ngModelChange.emit(this.iModel);
  }
}
