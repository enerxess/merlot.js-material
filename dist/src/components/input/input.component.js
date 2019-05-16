import { Component, Input, Output, EventEmitter } from "@angular/core";
var InputComponent = /** @class */ (function () {
    function InputComponent() {
        this.ngModelChange = new EventEmitter();
    }
    InputComponent.prototype.ngOnInit = function () {
        this.ui = this.schema.ui || {};
        if (this.schema.required && this.ui.label) {
            this.ui.label += " *";
        }
    };
    InputComponent.prototype.updateModel = function ($event) {
        this.ngModelChange.emit($event);
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-input",
                    template: "\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"{{ ui.label }}\"\n        [(ngModel)]=\"iModel\"\n        (ngModelChange)=\"updateModel($event)\"\n      />\n    </mat-form-field>\n    <mat-error *ngIf=\"control?.errors?.required\"\n      >Dieser Wert ist eine Pflichtangabe.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.min\"\n      >Dieser Zahlenwert darf nicht kleiner als\n      {{ control.errors.min.min }} sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.max\"\n      >Dieser Zahlenwert darf nicht gr\u00F6\u00DFer als\n      {{ control.errors.max.max }} sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.minlength\"\n      >Dieser Wert muss mindestens\n      {{ control.errors.minlength.requiredLength }} Zeichen lang\n      sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.maxlength\"\n      >Dieser Wert darf h\u00F6chstens\n      {{ control.errors.maxlength.requiredLength }} Zeichen lang\n      sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.enumValidator\"\n      >Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind:\n      {{ control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error\n    >\n  "
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = function () { return []; };
    InputComponent.propDecorators = {
        "control": [{ type: Input, args: ["control",] },],
        "iModel": [{ type: Input, args: ["iModel",] },],
        "schema": [{ type: Input, args: ["schema",] },],
        "ngModelChange": [{ type: Output },],
    };
    return InputComponent;
}());
export { InputComponent };
//# sourceMappingURL=input.component.js.map