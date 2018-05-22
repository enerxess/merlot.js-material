import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-input',
  template: `<mat-form-field>
              <input matInput placeholder="{{ui.label}}" [(ngModel)]="iModel" (ngModelChange)="updateModel($event)">
             </mat-form-field>`
})
export class InputComponent implements OnInit {
  @Input('control') control: FormControl;
  @Input('iModel') iModel: any;
  @Input('schema') schema: any;
  @Output() ngModelChange = new EventEmitter();
  public ui: any;

  constructor() { }

  ngOnInit() {
    this.ui = this.schema.ui || {};
  }

  updateModel($event: any) {
    this.ngModelChange.emit($event);
  }
}
