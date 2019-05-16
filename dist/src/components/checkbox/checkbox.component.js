import { Component, Input, Output, EventEmitter } from "@angular/core";
var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
        this.ngModelChange = new EventEmitter();
    }
    CheckboxComponent.prototype.ngOnInit = function () {
        this.ui = this.schema.ui || {};
    };
    Object.defineProperty(CheckboxComponent.prototype, "label", {
        get: function () {
            if (this.schema.required && this.ui.label) {
                return this.ui.label + " *";
            }
            else
                return this.ui.label;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.updateModel = function ($event) {
        this.ngModelChange.emit($event);
    };
    CheckboxComponent.decorators = [
        { type: Component, args: [{
                    selector: "app-checkbox",
                    template: '<mat-checkbox [(ngModel)]="iModel" (ngModelChange)="updateModel($event)">{{label}}</mat-checkbox>'
                },] },
    ];
    /** @nocollapse */
    CheckboxComponent.ctorParameters = function () { return []; };
    CheckboxComponent.propDecorators = {
        "iModel": [{ type: Input, args: ["iModel",] },],
        "schema": [{ type: Input, args: ["schema",] },],
        "ngModelChange": [{ type: Output },],
    };
    return CheckboxComponent;
}());
export { CheckboxComponent };
//# sourceMappingURL=checkbox.component.js.map