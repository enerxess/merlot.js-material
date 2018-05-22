import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SliderComponent } from './components/slider/slider.component';
import { MerlotMaterial } from './merlot-material.service';
import { InputComponent } from './components/input/input.component';
import { MatInputModule, MatCheckboxModule, MatChipsModule, MatIconModule, MatSliderModule } from '@angular/material';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { ChipInputComponent } from './components/chip-input/chip-input.component';
var MerlotMaterialModule = /** @class */ (function () {
    function MerlotMaterialModule() {
    }
    MerlotMaterialModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        MatCheckboxModule,
                        MatChipsModule,
                        MatIconModule,
                        MatInputModule,
                        MatSliderModule,
                        CommonModule,
                        FormsModule
                    ],
                    providers: [MerlotMaterial],
                    declarations: [SliderComponent, InputComponent, CheckboxComponent, ChipInputComponent],
                    entryComponents: [
                        CheckboxComponent,
                        ChipInputComponent,
                        InputComponent,
                        SliderComponent
                    ]
                },] },
    ];
    return MerlotMaterialModule;
}());
export { MerlotMaterialModule };
//# sourceMappingURL=merlot-material.module.js.map