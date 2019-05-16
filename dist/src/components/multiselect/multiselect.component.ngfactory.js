/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
import * as i0 from "@angular/core";
import * as i1 from "../../../node_modules/@angular/material/core/typings/index.ngfactory";
import * as i2 from "@angular/material/core";
import * as i3 from "@angular/material/form-field";
import * as i4 from "../../../node_modules/@angular/material/form-field/typings/index.ngfactory";
import * as i5 from "@angular/cdk/bidi";
import * as i6 from "@angular/cdk/platform";
import * as i7 from "../../../node_modules/@angular/material/select/typings/index.ngfactory";
import * as i8 from "@angular/material/select";
import * as i9 from "@angular/forms";
import * as i10 from "@angular/cdk/scrolling";
import * as i11 from "@angular/common";
import * as i12 from "./multiselect.component";
var styles_MultiselectComponent = [];
var RenderType_MultiselectComponent = i0.ɵcrt({ encapsulation: 2, styles: styles_MultiselectComponent, data: {} });
export { RenderType_MultiselectComponent as RenderType_MultiselectComponent };
function View_MultiselectComponent_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "mat-option", [["class", "mat-option"], ["role", "option"]], [[1, "tabindex", 0], [2, "mat-selected", null], [2, "mat-option-multiple", null], [2, "mat-active", null], [8, "id", 0], [1, "aria-selected", 0], [1, "aria-disabled", 0], [2, "mat-option-disabled", null]], [[null, "click"], [null, "keydown"]], function (_v, en, $event) { var ad = true; if (("click" === en)) {
        var pd_0 = (i0.ɵnov(_v, 1)._selectViaInteraction() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i0.ɵnov(_v, 1)._handleKeydown($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_MatOption_0, i1.RenderType_MatOption)), i0.ɵdid(1, 8568832, [[8, 4]], 0, i2.MatOption, [i0.ElementRef, i0.ChangeDetectorRef, [2, i2.MAT_OPTION_PARENT_COMPONENT], [2, i2.MatOptgroup]], { value: [0, "value"] }, null), (_l()(), i0.ɵted(2, 0, ["", ""]))], function (_ck, _v) { var currVal_8 = _v.context.$implicit; _ck(_v, 1, 0, currVal_8); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1)._getTabIndex(); var currVal_1 = i0.ɵnov(_v, 1).selected; var currVal_2 = i0.ɵnov(_v, 1).multiple; var currVal_3 = i0.ɵnov(_v, 1).active; var currVal_4 = i0.ɵnov(_v, 1).id; var currVal_5 = i0.ɵnov(_v, 1).selected.toString(); var currVal_6 = i0.ɵnov(_v, 1).disabled.toString(); var currVal_7 = i0.ɵnov(_v, 1).disabled; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _v.context.$implicit; _ck(_v, 2, 0, currVal_9); }); }
function View_MultiselectComponent_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i3.MatError, [], null, null), (_l()(), i0.ɵted(-1, null, ["Dieser Wert ist eine Pflichtangabe."]))], null, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0); }); }
function View_MultiselectComponent_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i3.MatError, [], null, null), (_l()(), i0.ɵted(2, null, ["Es m\u00FCssen mindestens ", " Elemente ausgew\u00E4hlt werden."]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.control.errors.minNumber.requiredElements; _ck(_v, 2, 0, currVal_1); }); }
function View_MultiselectComponent_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "mat-error", [["class", "mat-error"], ["role", "alert"]], [[1, "id", 0]], null, null, null, null)), i0.ɵdid(1, 16384, null, 0, i3.MatError, [], null, null), (_l()(), i0.ɵted(2, null, ["Dieser Wert ist nicht zul\u00E4ssig. Erlaubte Werte sind: ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = i0.ɵnov(_v, 1).id; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.control.errors.enumValidator.allowedValues.join(", "); _ck(_v, 2, 0, currVal_1); }); }
export function View_MultiselectComponent_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 20, "mat-form-field", [["class", "mat-form-field"]], [[2, "mat-form-field-appearance-standard", null], [2, "mat-form-field-appearance-fill", null], [2, "mat-form-field-appearance-outline", null], [2, "mat-form-field-appearance-legacy", null], [2, "mat-form-field-invalid", null], [2, "mat-form-field-can-float", null], [2, "mat-form-field-should-float", null], [2, "mat-form-field-hide-placeholder", null], [2, "mat-form-field-disabled", null], [2, "mat-form-field-autofilled", null], [2, "mat-focused", null], [2, "mat-accent", null], [2, "mat-warn", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], null, null, i4.View_MatFormField_0, i4.RenderType_MatFormField)), i0.ɵdid(1, 7389184, null, 7, i3.MatFormField, [i0.ElementRef, i0.ChangeDetectorRef, [2, i2.MAT_LABEL_GLOBAL_OPTIONS], [2, i5.Directionality], [2, i3.MAT_FORM_FIELD_DEFAULT_OPTIONS], i6.Platform], null, null), i0.ɵqud(335544320, 1, { _control: 0 }), i0.ɵqud(335544320, 2, { _placeholderChild: 0 }), i0.ɵqud(335544320, 3, { _labelChild: 0 }), i0.ɵqud(603979776, 4, { _errorChildren: 1 }), i0.ɵqud(603979776, 5, { _hintChildren: 1 }), i0.ɵqud(603979776, 6, { _prefixChildren: 1 }), i0.ɵqud(603979776, 7, { _suffixChildren: 1 }), (_l()(), i0.ɵeld(9, 0, null, 1, 11, "mat-select", [["class", "mat-select"], ["multiple", ""], ["role", "listbox"]], [[1, "id", 0], [1, "tabindex", 0], [1, "aria-label", 0], [1, "aria-labelledby", 0], [1, "aria-required", 0], [1, "aria-disabled", 0], [1, "aria-invalid", 0], [1, "aria-owns", 0], [1, "aria-multiselectable", 0], [1, "aria-describedby", 0], [1, "aria-activedescendant", 0], [2, "mat-select-disabled", null], [2, "mat-select-invalid", null], [2, "mat-select-required", null], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "keydown"], [null, "focus"], [null, "blur"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("keydown" === en)) {
        var pd_0 = (i0.ɵnov(_v, 13)._handleKeydown($event) !== false);
        ad = (pd_0 && ad);
    } if (("focus" === en)) {
        var pd_1 = (i0.ɵnov(_v, 13)._onFocus() !== false);
        ad = (pd_1 && ad);
    } if (("blur" === en)) {
        var pd_2 = (i0.ɵnov(_v, 13)._onBlur() !== false);
        ad = (pd_2 && ad);
    } if (("ngModelChange" === en)) {
        var pd_3 = ((_co.transformediModel = $event) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = (_co.updateModel($event) !== false);
        ad = (pd_4 && ad);
    } return ad; }, i7.View_MatSelect_0, i7.RenderType_MatSelect)), i0.ɵprd(6144, null, i2.MAT_OPTION_PARENT_COMPONENT, null, [i8.MatSelect]), i0.ɵdid(11, 671744, null, 0, i9.NgModel, [[8, null], [8, null], [8, null], [8, null]], { model: [0, "model"] }, { update: "ngModelChange" }), i0.ɵprd(2048, null, i9.NgControl, null, [i9.NgModel]), i0.ɵdid(13, 2080768, null, 3, i8.MatSelect, [i10.ViewportRuler, i0.ChangeDetectorRef, i0.NgZone, i2.ErrorStateMatcher, i0.ElementRef, [2, i5.Directionality], [2, i9.NgForm], [2, i9.FormGroupDirective], [2, i3.MatFormField], [6, i9.NgControl], [8, null], i8.MAT_SELECT_SCROLL_STRATEGY], { placeholder: [0, "placeholder"], multiple: [1, "multiple"] }, null), i0.ɵqud(603979776, 8, { options: 1 }), i0.ɵqud(603979776, 9, { optionGroups: 1 }), i0.ɵqud(335544320, 10, { customTrigger: 0 }), i0.ɵdid(17, 16384, null, 0, i9.NgControlStatus, [[4, i9.NgControl]], null, null), i0.ɵprd(2048, [[1, 4]], i3.MatFormFieldControl, null, [i8.MatSelect]), (_l()(), i0.ɵand(16777216, null, 1, 1, null, View_MultiselectComponent_1)), i0.ɵdid(20, 802816, null, 0, i11.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiselectComponent_2)), i0.ɵdid(22, 16384, null, 0, i11.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiselectComponent_3)), i0.ɵdid(24, 16384, null, 0, i11.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_MultiselectComponent_4)), i0.ɵdid(26, 16384, null, 0, i11.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_41 = _co.transformediModel; _ck(_v, 11, 0, currVal_41); var currVal_42 = _co.label; var currVal_43 = ""; _ck(_v, 13, 0, currVal_42, currVal_43); var currVal_44 = _co.schema.enum; _ck(_v, 20, 0, currVal_44); var currVal_45 = (((_co.control == null) ? null : ((_co.control.errors == null) ? null : _co.control.errors.required)) && ((_co.control == null) ? null : _co.control.touched)); _ck(_v, 22, 0, currVal_45); var currVal_46 = (((_co.control == null) ? null : ((_co.control.errors == null) ? null : _co.control.errors.minNumber)) && ((_co.control == null) ? null : _co.control.touched)); _ck(_v, 24, 0, currVal_46); var currVal_47 = (((_co.control == null) ? null : ((_co.control.errors == null) ? null : _co.control.errors.enumValidator)) && ((_co.control == null) ? null : _co.control.touched)); _ck(_v, 26, 0, currVal_47); }, function (_ck, _v) { var currVal_0 = (i0.ɵnov(_v, 1).appearance == "standard"); var currVal_1 = (i0.ɵnov(_v, 1).appearance == "fill"); var currVal_2 = (i0.ɵnov(_v, 1).appearance == "outline"); var currVal_3 = (i0.ɵnov(_v, 1).appearance == "legacy"); var currVal_4 = i0.ɵnov(_v, 1)._control.errorState; var currVal_5 = i0.ɵnov(_v, 1)._canLabelFloat; var currVal_6 = i0.ɵnov(_v, 1)._shouldLabelFloat(); var currVal_7 = i0.ɵnov(_v, 1)._hideControlPlaceholder(); var currVal_8 = i0.ɵnov(_v, 1)._control.disabled; var currVal_9 = i0.ɵnov(_v, 1)._control.autofilled; var currVal_10 = i0.ɵnov(_v, 1)._control.focused; var currVal_11 = (i0.ɵnov(_v, 1).color == "accent"); var currVal_12 = (i0.ɵnov(_v, 1).color == "warn"); var currVal_13 = i0.ɵnov(_v, 1)._shouldForward("untouched"); var currVal_14 = i0.ɵnov(_v, 1)._shouldForward("touched"); var currVal_15 = i0.ɵnov(_v, 1)._shouldForward("pristine"); var currVal_16 = i0.ɵnov(_v, 1)._shouldForward("dirty"); var currVal_17 = i0.ɵnov(_v, 1)._shouldForward("valid"); var currVal_18 = i0.ɵnov(_v, 1)._shouldForward("invalid"); var currVal_19 = i0.ɵnov(_v, 1)._shouldForward("pending"); _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19]); var currVal_20 = i0.ɵnov(_v, 13).id; var currVal_21 = i0.ɵnov(_v, 13).tabIndex; var currVal_22 = i0.ɵnov(_v, 13)._ariaLabel; var currVal_23 = i0.ɵnov(_v, 13).ariaLabelledby; var currVal_24 = i0.ɵnov(_v, 13).required.toString(); var currVal_25 = i0.ɵnov(_v, 13).disabled.toString(); var currVal_26 = i0.ɵnov(_v, 13).errorState; var currVal_27 = (i0.ɵnov(_v, 13).panelOpen ? i0.ɵnov(_v, 13)._optionIds : null); var currVal_28 = i0.ɵnov(_v, 13).multiple; var currVal_29 = (i0.ɵnov(_v, 13)._ariaDescribedby || null); var currVal_30 = i0.ɵnov(_v, 13)._getAriaActiveDescendant(); var currVal_31 = i0.ɵnov(_v, 13).disabled; var currVal_32 = i0.ɵnov(_v, 13).errorState; var currVal_33 = i0.ɵnov(_v, 13).required; var currVal_34 = i0.ɵnov(_v, 17).ngClassUntouched; var currVal_35 = i0.ɵnov(_v, 17).ngClassTouched; var currVal_36 = i0.ɵnov(_v, 17).ngClassPristine; var currVal_37 = i0.ɵnov(_v, 17).ngClassDirty; var currVal_38 = i0.ɵnov(_v, 17).ngClassValid; var currVal_39 = i0.ɵnov(_v, 17).ngClassInvalid; var currVal_40 = i0.ɵnov(_v, 17).ngClassPending; _ck(_v, 9, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40]); }); }
export function View_MultiselectComponent_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "app-multiselect", [], null, null, null, View_MultiselectComponent_0, RenderType_MultiselectComponent)), i0.ɵdid(1, 114688, null, 0, i12.MultiselectComponent, [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MultiselectComponentNgFactory = i0.ɵccf("app-multiselect", i12.MultiselectComponent, View_MultiselectComponent_Host_0, { control: "control", iModel: "iModel", schema: "schema" }, { ngModelChange: "ngModelChange" }, []);
export { MultiselectComponentNgFactory as MultiselectComponentNgFactory };
//# sourceMappingURL=multiselect.component.ngfactory.js.map