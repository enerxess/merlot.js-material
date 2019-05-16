import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-checkbox",
  template:
    '<mat-checkbox [(ngModel)]="iModel" (ngModelChange)="updateModel($event)">{{label}}</mat-checkbox>'
})
export class CheckboxComponent implements OnInit {
  @Input("iModel") iModel: any;
  @Input("schema") schema: any;
  @Output() ngModelChange = new EventEmitter();
  public ui: any;

  constructor() {}

  ngOnInit() {
    this.ui = this.schema.ui || {};
  }

  get label() {
    if (this.schema.required && this.ui.label) {
      return this.ui.label + " *";
    } else return this.ui.label;
  }

  updateModel($event: any) {
    this.ngModelChange.emit($event);
  }
}
