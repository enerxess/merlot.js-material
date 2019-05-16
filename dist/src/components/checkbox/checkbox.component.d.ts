import { OnInit, EventEmitter } from "@angular/core";
export declare class CheckboxComponent implements OnInit {
    iModel: any;
    schema: any;
    ngModelChange: EventEmitter<{}>;
    ui: any;
    constructor();
    ngOnInit(): void;
    readonly label: any;
    updateModel($event: any): void;
}
