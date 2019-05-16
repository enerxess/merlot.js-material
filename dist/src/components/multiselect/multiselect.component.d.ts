import { OnInit, EventEmitter } from "@angular/core";
import { FormControl } from "@angular/forms";
export declare class MultiselectComponent implements OnInit {
    control: FormControl | any;
    iModel: any;
    schema: any;
    ngModelChange: EventEmitter<{}>;
    ui: any;
    transformediModel: any;
    constructor();
    ngOnInit(): void;
    readonly label: any;
    updateModel($event: any): void;
}
