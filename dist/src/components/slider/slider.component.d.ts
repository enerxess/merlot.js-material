import { OnInit, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
export declare class SliderComponent implements OnInit {
    control: FormControl | any;
    iModel: any;
    schema: any;
    ngModelChange: EventEmitter<{}>;
    ui: any;
    constructor();
    ngOnInit(): void;
    updateModel($event: any): void;
}
