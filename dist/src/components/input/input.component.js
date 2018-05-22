import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
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
                    template: "<mat-form-field>\n              <input matInput placeholder=\"{{ui.label}}\" [(ngModel)]=\"iModel\" (ngModelChange)=\"updateModel($event)\">\n             </mat-form-field>"
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