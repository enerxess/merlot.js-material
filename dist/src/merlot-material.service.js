import { Injectable } from '@angular/core';
import { SliderComponent } from './components/slider/slider.component';
import { InputComponent } from './components/input/input.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
import { MultiselectComponent } from './components/multiselect/multiselect.component';
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
        { type: Injectable },
    ];
    /** @nocollapse */
    MerlotMaterial.ctorParameters = function () { return []; };
    return MerlotMaterial;
}());
export { MerlotMaterial };
//# sourceMappingURL=merlot-material.service.js.map