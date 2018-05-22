import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
var ChipInputComponent = /** @class */ (function () {
    function ChipInputComponent() {
        this.ngModelChange = new EventEmitter();
        this.separatorKeysCodes = [ENTER, COMMA];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
    }
    ChipInputComponent.prototype.ngOnInit = function () {
        this.ui = this.schema.ui || {};
    };
    ChipInputComponent.prototype.updateModel = function ($event) {
        this.ngModelChange.emit($event);
    };
    ChipInputComponent.prototype.add = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our fruit
        if ((value || '').trim()) {
            this.iModel.push(new FormControl(value));
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    ChipInputComponent.prototype.remove = function (index) {
        this.iModel.removeAt(index);
    };
    ChipInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-chip-input',
                    template: "<mat-form-field class=\"demo-chip-list\">\n              <mat-chip-list #chipList>\n                <mat-chip *ngFor=\"let instance of iModel.controls; index as i\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(i)\">\n                  {{instance.value}}\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input [placeholder]=\"ui.label\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"add($event)\" />\n              </mat-chip-list>\n            </mat-form-field>"
                },] },
    ];
    /** @nocollapse */
    ChipInputComponent.ctorParameters = function () { return []; };
    ChipInputComponent.propDecorators = {
        "iModel": [{ type: Input, args: ['iModel',] },],
        "schema": [{ type: Input, args: ['schema',] },],
        "ngModelChange": [{ type: Output },],
    };
    return ChipInputComponent;
}());
export { ChipInputComponent };
//# sourceMappingURL=chip-input.component.js.map