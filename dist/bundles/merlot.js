(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/keycodes'), require('@angular/forms'), require('@angular/common'), require('@angular/material')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/cdk/keycodes', '@angular/forms', '@angular/common', '@angular/material'], factory) :
    (factory((global.merlot = global.merlot || {}, global.merlot.js = global.merlot.js || {}, global.merlot.js.ui = {}),global.ng.core,null,null,null,null));
}(this, (function (exports,core,keycodes,forms,common,material) { 'use strict';

    var SliderComponent = /** @class */ (function () {
        function SliderComponent() {
            this.ngModelChange = new core.EventEmitter();
        }
        SliderComponent.prototype.ngOnInit = function () {
            this.ui = this.schema.ui || {};
        };
        SliderComponent.prototype.updateModel = function ($event) {
            this.ngModelChange.emit($event);
        };
        SliderComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-slider',
                        template: "<mat-slider [min]=\"schema.min\" [max]=\"schema.max\" [step]=\"ui.steps || 1\" [(ngModel)]=\"iModel\" (ngModelChange)=\"updateModel($event)\"></mat-slider>\n            <mat-error *ngIf=\"control?.errors?.required\">Dieser Wert ist eine Pflichtangabe.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.min\">Dieser Zahlenwert darf nicht kleiner als {{control.errors.min.min}} sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.max\">Dieser Zahlenwert darf nicht gr\u00F6\u00DFer als {{control.errors.max.max}} sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.minlength\">Dieser Wert muss mindestens {{control.errors.minlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.maxlength\">Dieser Wert darf h\u00F6chstens {{control.errors.maxlength.requiredLength}}\n              Zeichen lang sein.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.enumValidator\">Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind: {{\n              control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error>"
                    },] },
        ];
        /** @nocollapse */
        SliderComponent.ctorParameters = function () { return []; };
        SliderComponent.propDecorators = {
            "control": [{ type: core.Input, args: ['control',] },],
            "iModel": [{ type: core.Input, args: ['iModel',] },],
            "schema": [{ type: core.Input, args: ['schema',] },],
            "ngModelChange": [{ type: core.Output },],
        };
        return SliderComponent;
    }());

    var InputComponent = /** @class */ (function () {
        function InputComponent() {
            this.ngModelChange = new core.EventEmitter();
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
            { type: core.Component, args: [{
                        selector: "app-input",
                        template: "\n    <mat-form-field>\n      <input\n        matInput\n        placeholder=\"{{ ui.label }}\"\n        [(ngModel)]=\"iModel\"\n        (ngModelChange)=\"updateModel($event)\"\n      />\n    </mat-form-field>\n    <mat-error *ngIf=\"control?.errors?.required\"\n      >Dieser Wert ist eine Pflichtangabe.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.min\"\n      >Dieser Zahlenwert darf nicht kleiner als\n      {{ control.errors.min.min }} sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.max\"\n      >Dieser Zahlenwert darf nicht gr\u00F6\u00DFer als\n      {{ control.errors.max.max }} sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.minlength\"\n      >Dieser Wert muss mindestens\n      {{ control.errors.minlength.requiredLength }} Zeichen lang\n      sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.maxlength\"\n      >Dieser Wert darf h\u00F6chstens\n      {{ control.errors.maxlength.requiredLength }} Zeichen lang\n      sein.</mat-error\n    >\n    <mat-error *ngIf=\"control?.errors?.enumValidator\"\n      >Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind:\n      {{ control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error\n    >\n  "
                    },] },
        ];
        /** @nocollapse */
        InputComponent.ctorParameters = function () { return []; };
        InputComponent.propDecorators = {
            "control": [{ type: core.Input, args: ["control",] },],
            "iModel": [{ type: core.Input, args: ["iModel",] },],
            "schema": [{ type: core.Input, args: ["schema",] },],
            "ngModelChange": [{ type: core.Output },],
        };
        return InputComponent;
    }());

    var CheckboxComponent = /** @class */ (function () {
        function CheckboxComponent() {
            this.ngModelChange = new core.EventEmitter();
        }
        CheckboxComponent.prototype.ngOnInit = function () {
            this.ui = this.schema.ui || {};
        };
        CheckboxComponent.prototype.updateModel = function ($event) {
            this.ngModelChange.emit($event);
        };
        CheckboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-checkbox',
                        template: '<mat-checkbox [(ngModel)]="iModel" (ngModelChange)="updateModel($event)">{{ui.label}}</mat-checkbox>'
                    },] },
        ];
        /** @nocollapse */
        CheckboxComponent.ctorParameters = function () { return []; };
        CheckboxComponent.propDecorators = {
            "iModel": [{ type: core.Input, args: ['iModel',] },],
            "schema": [{ type: core.Input, args: ['schema',] },],
            "ngModelChange": [{ type: core.Output },],
        };
        return CheckboxComponent;
    }());

    var ChipInputComponent = /** @class */ (function () {
        function ChipInputComponent() {
            this.ngModelChange = new core.EventEmitter();
            this.separatorKeysCodes = [keycodes.ENTER, keycodes.COMMA];
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
                this.iModel.push(new forms.FormControl(value));
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
            { type: core.Component, args: [{
                        selector: 'app-chip-input',
                        template: "<mat-form-field class=\"demo-chip-list\">\n              <mat-chip-list #chipList>\n                <mat-chip *ngFor=\"let instance of iModel.controls; index as i\" [selectable]=\"selectable\" [removable]=\"removable\" (remove)=\"remove(i)\">\n                  {{instance.value}}\n                  <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n                </mat-chip>\n                <input [placeholder]=\"ui.label\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"add($event)\" />\n              </mat-chip-list>\n            </mat-form-field>"
                    },] },
        ];
        /** @nocollapse */
        ChipInputComponent.ctorParameters = function () { return []; };
        ChipInputComponent.propDecorators = {
            "iModel": [{ type: core.Input, args: ['iModel',] },],
            "schema": [{ type: core.Input, args: ['schema',] },],
            "ngModelChange": [{ type: core.Output },],
        };
        return ChipInputComponent;
    }());

    var MultiselectComponent = /** @class */ (function () {
        function MultiselectComponent() {
            this.ngModelChange = new core.EventEmitter();
            this.transformediModel = [];
        }
        MultiselectComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.iModel.controls.forEach(function (element) {
                _this.transformediModel.push(element.value);
            });
            this.ui = this.schema.ui || {};
        };
        MultiselectComponent.prototype.updateModel = function ($event) {
            var _this = this;
            this.iModel.controls = [];
            $event.forEach(function (element) {
                _this.iModel.push(new forms.FormControl(element));
            });
            if (!this.iModel.controls.length) {
                this.iModel.push(new forms.FormControl());
            }
            this.ngModelChange.emit(this.iModel);
        };
        MultiselectComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'app-multiselect',
                        template: "<mat-form-field>\n              <mat-select [placeholder]=\"ui.label\" [(ngModel)]=\"transformediModel\" (ngModelChange)=\"updateModel($event)\" multiple>\n                <mat-option *ngFor=\"let entry of schema.enum\" [value]=\"entry\">{{entry}}</mat-option>\n              </mat-select>\n            </mat-form-field>\n            <mat-error *ngIf=\"control?.errors?.required\">Dieser Wert ist eine Pflichtangabe.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.minNumber\">Es m\u00FCssen mindestens {{\n              control.errors.minNumber.requiredElements}} Elemente ausgew\u00E4hlt werden.</mat-error>\n            <mat-error *ngIf=\"control?.errors?.enumValidator\">Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind: {{\n              control.errors.enumValidator.allowedValues.join(\", \") }}</mat-error>"
                    },] },
        ];
        /** @nocollapse */
        MultiselectComponent.ctorParameters = function () { return []; };
        MultiselectComponent.propDecorators = {
            "control": [{ type: core.Input, args: ['control',] },],
            "iModel": [{ type: core.Input, args: ['iModel',] },],
            "schema": [{ type: core.Input, args: ['schema',] },],
            "ngModelChange": [{ type: core.Output },],
        };
        return MultiselectComponent;
    }());

    var MerlotMaterial = /** @class */ (function () {
        function MerlotMaterial() {
            this.templates = [
                { name: 'checkbox', component: CheckboxComponent },
                { name: 'chipsInput', component: ChipInputComponent },
                { name: 'multiselect', component: MultiselectComponent },
                { name: 'input', component: InputComponent },
                { name: 'slider', component: SliderComponent }
            ];
            this.defaultTemplates = { 'String': InputComponent, 'Number': InputComponent, 'Boolean': CheckboxComponent };
        }
        MerlotMaterial.decorators = [
            { type: core.Injectable },
        ];
        /** @nocollapse */
        MerlotMaterial.ctorParameters = function () { return []; };
        return MerlotMaterial;
    }());

    var MerlotMaterialModule = /** @class */ (function () {
        function MerlotMaterialModule() {
        }
        MerlotMaterialModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatSelectModule,
                            material.MatSliderModule,
                            common.CommonModule,
                            forms.FormsModule
                        ],
                        providers: [MerlotMaterial],
                        declarations: [SliderComponent, InputComponent, CheckboxComponent, ChipInputComponent, MultiselectComponent],
                        entryComponents: [
                            CheckboxComponent,
                            ChipInputComponent,
                            InputComponent,
                            MultiselectComponent,
                            SliderComponent
                        ]
                    },] },
        ];
        return MerlotMaterialModule;
    }());

    exports.MerlotMaterialModule = MerlotMaterialModule;
    exports.MerlotMaterial = MerlotMaterial;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
