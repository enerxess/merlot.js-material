import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class InputComponent implements OnInit {
    control: FormControl;
    iModel: any;
    schema: any;
    ngModelChange: EventEmitter<{}>;
    ui: any;
    constructor();
    ngOnInit(): void;
    updateModel($event: any): void;
}
