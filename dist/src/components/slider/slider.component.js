import { Component, Input, Output, EventEmitter } from '@angular/core';
var SliderComponent = /** @class */ (function () {
    function SliderComponent() {
        this.ngModelChange = new EventEmitter();
    }
    SliderComponent.prototype.ngOnInit = function () {
        this.ui = this.schema.ui || {};
    };
    SliderComponent.prototype.updateModel = function ($event) {
        this.ngModelChange.emit($event);
    };
    SliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-slider',
                    template: '<mat-slider [min]="schema.min" [max]="schema.max" [step]="ui.steps || 1" [(ngModel)]="iModel" (ngModelChange)="updateModel($event)"></mat-slider>'
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        "iModel": [{ type: Input, args: ['iModel',] },],
        "schema": [{ type: Input, args: ['schema',] },],
        "ngModelChange": [{ type: Output },],
    };
    return SliderComponent;
}());
export { SliderComponent };
//# sourceMappingURL=slider.component.js.map