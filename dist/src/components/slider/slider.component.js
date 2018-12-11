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
                    template: "<mat-slider [min]=\"schema.min\" [max]=\"schema.max\" [step]=\"ui.steps || 1\" [(ngModel)]=\"iModel\" (ngModelChange)=\"updateModel($event)\"></mat-slider>\n            <mat-error *ngIf=\"control.errors && control.errors.required\">Dieser Wert ist eine Pflichtangabe.</mat-error>\n            <mat-error *ngIf=\"control.errors && control.errors.min\">Dieser Zahlenwert darf nicht kleiner als {{control.errors.min.min}} sein.</mat-error>\n            <mat-error *ngIf=\"control.errors && control.errors.max\">Dieser Zahlenwert darf nicht gr\u00F6\u00DFer als {{control.errors.max.max}} sein.</mat-error>\n            <mat-error *ngIf=\"control.errors && control.errors.minlength\">Dieser Wert muss mindestens {{control.errors.minlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control.errors && control.errors.maxlength\">Dieser Wert darf h\u00F6chstens {{control.errors.maxlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control.errors && control.errors.enumValidator\">Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind: {{\n              control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error>"
                },] },
    ];
    /** @nocollapse */
    SliderComponent.ctorParameters = function () { return []; };
    SliderComponent.propDecorators = {
        "control": [{ type: Input, args: ['control',] },],
        "iModel": [{ type: Input, args: ['iModel',] },],
        "schema": [{ type: Input, args: ['schema',] },],
        "ngModelChange": [{ type: Output },],
    };
    return SliderComponent;
}());
export { SliderComponent };
//# sourceMappingURL=slider.component.js.map