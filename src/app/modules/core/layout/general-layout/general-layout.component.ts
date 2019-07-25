import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-general-layout',
    templateUrl: './general-layout.component.html',
    styleUrls: ['./general-layout.component.less']
})
export class GeneralLayoutComponent implements OnInit {

    public selectedValue: string;
    public types: string;
    public taxes: string;
    public dateComming: Date;
    public dateOutComming: Date;
    constructor() { }

    ngOnInit() {
    }

}
