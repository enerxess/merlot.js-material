import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chip-input',
  template: `<mat-form-field class="demo-chip-list">
              <mat-chip-list #chipList>
                <mat-chip *ngFor="let instance of iModel.controls; index as i" [selectable]="selectable" [removable]="removable" (remove)="remove(i)">
                  {{instance.value}}
                  <mat-icon matChipRemove *ngIf="removable">cancel</mat-icon>
                </mat-chip>
                <input [placeholder]="ui.label" [matChipInputFor]="chipList" [matChipInputSeparatorKeyCodes]="separatorKeysCodes" [matChipInputAddOnBlur]="addOnBlur"
                  (matChipInputTokenEnd)="add($event)" />
              </mat-chip-list>
            </mat-form-field>`
})
export class ChipInputComponent implements OnInit {
  @Input('iModel') iModel: any;
  @Input('schema') schema: any;
  @Output() ngModelChange = new EventEmitter();
  public ui: any;
  public separatorKeysCodes = [ENTER, COMMA];

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;

  constructor() { }

  ngOnInit() {
    this.ui = this.schema.ui || {};
  }

  updateModel($event: any) {
    this.ngModelChange.emit($event);
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.iModel.push(new FormControl(value));
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

  }

  remove(index: any): void {
    this.iModel.removeAt(index);
  }
}
