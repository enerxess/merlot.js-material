import { Component, Input, Output, EventEmitter } from '@angular/core';
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.ngModelChange = new EventEmitter();
    }
    InputComponent.prototype.ngOnInit = function () {
        this.ui = this.schema.ui || {};
    };
    InputComponent.prototype.updateModel = function ($event) {
        this.ngModelChange.emit($event);
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-input',
                    template: "<mat-form-field>\n              <input matInput placeholder=\"{{ui.label}}\" [(ngModel)]=\"iModel\" (ngModelChange)=\"updateModel($event)\">\n             </mat-form-field>\n             <mat-error *ngIf=\"control?.errors?.required\">Dieser Wert ist eine Pflichtangabe.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.min\">Dieser Zahlenwert darf nicht kleiner als {{control.errors.min.min}} sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.max\">Dieser Zahlenwert darf nicht gr\u00F6\u00DFer als {{control.errors.max.max}} sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.minlength\">Dieser Wert muss mindestens {{control.errors.minlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.maxlength\">Dieser Wert darf h\u00F6chstens {{control.errors.maxlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.enumValidator\">Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind: {{\n              control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error>"
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        "control": [{ type: Input, args: ['control',] },],
        "iModel": [{ type: Input, args: ['iModel',] },],
        "schema": [{ type: Input, args: ['schema',] },],
        "ngModelChange": [{ type: Output },],
    };
    return InputComponent;
}());
export { InputComponent };
//# sourceMappingURL=input.component.js.map