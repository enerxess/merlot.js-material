import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
var MultiselectComponent = /** @class */ (function () {
    function MultiselectComponent() {
        this.ngModelChange = new EventEmitter();
        this.transformediModel = [];
    }
    MultiselectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.iModel.controls.forEach(function (element) {
            _this.transformediModel.push(new FormControl(element.value));
        });
        this.ui = this.schema.ui || {};
    };
    MultiselectComponent.prototype.updateModel = function ($event) {
        var _this = this;
        this.iModel.controls = [];
        $event.forEach(function (element) {
            _this.iModel.push(new FormControl(element));
        });
        if (!this.iModel.controls.length) {
            this.iModel.push(new FormControl());
        }
        this.ngModelChange.emit(this.iModel);
    };
    MultiselectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-multiselect',
                    template: "<mat-form-field>\n              <mat-select [placeholder]=\"ui.label\" [(ngModel)]=\"transformediModel\" (ngModelChange)=\"updateModel($event)\" multiple>\n                <mat-option *ngFor=\"let entry of schema.enum\" [value]=\"entry\">{{entry}}</mat-option>\n              </mat-select>\n            </mat-form-field>"
                },] },
    ];
    /** @nocollapse */
    MultiselectComponent.ctorParameters = function () { return []; };
    MultiselectComponent.propDecorators = {
        "control": [{ type: Input, args: ['control',] },],
        "iModel": [{ type: Input, args: ['iModel',] },],
        "schema": [{ type: Input, args: ['schema',] },],
        "ngModelChange": [{ type: Output },],
    };
    return MultiselectComponent;
}());
export { MultiselectComponent };
//# sourceMappingURL=multiselect.component.js.map