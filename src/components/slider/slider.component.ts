import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-slider',
  template: '<mat-slider [min]="schema.min" [max]="schema.max" [step]="ui.steps || 1" [(ngModel)]="iModel" (ngModelChange)="updateModel($event)"></mat-slider>'
})
export class SliderComponent implements OnInit {
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
