import { OnInit, EventEmitter } from '@angular/core';
import { MatChipInputEvent } from '@angular/material';
export declare class ChipInputComponent implements OnInit {
    iModel: any;
    schema: any;
    ngModelChange: EventEmitter<{}>;
    ui: any;
    separatorKeysCodes: number[];
    visible: boolean;
    selectable: boolean;
    removable: boolean;
    addOnBlur: boolean;
    constructor();
    ngOnInit(): void;
    updateModel($event: any): void;
    add(event: MatChipInputEvent): void;
    remove(index: any): void;
}
