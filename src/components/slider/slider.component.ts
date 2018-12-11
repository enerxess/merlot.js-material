import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-slider',
  template: `<mat-slider [min]="schema.min" [max]="schema.max" [step]="ui.steps || 1" [(ngModel)]="iModel" (ngModelChange)="updateModel($event)"></mat-slider>
            <mat-error *ngIf="control?.errors?.required">Dieser Wert ist eine Pflichtangabe.</mat-error>
            <mat-error *ngIf="control?.errors?.min">Dieser Zahlenwert darf nicht kleiner als {{control.errors.min.min}} sein.</mat-error>
            <mat-error *ngIf="control?.errors?.max">Dieser Zahlenwert darf nicht größer als {{control.errors.max.max}} sein.</mat-error>
            <mat-error *ngIf="control?.errors?.minlength">Dieser Wert muss mindestens {{control.errors.minlength.requiredLength}}
              Zeichen lang sein.</mat-error>
            <mat-error *ngIf="control?.errors?.maxlength">Dieser Wert darf höchstens {{control.errors.maxlength.requiredLength}}
              Zeichen lang sein.</mat-error>
            <mat-error *ngIf="control?.errors?.enumValidator">Dieser Wert ist nicht zulässig. Erlaubte Werte sind: {{
              control.errors.enumValidator.allowedValues.join(", ") }}</mat-error>`
})
export class SliderComponent implements OnInit {
  @Input('control') control: FormControl | any;
  @Input('iModel') iModel: any;
  @Input('schema') schema: any;
  @Output() ngModelChange = new EventEmitter();
  public ui: any;

  constructor() { }

  ngOnInit() {
    this.ui = this.schema.ui || {};
  }

  updateModel($event: any) {
    this.ngModelChange.emit($event);
  }
}
