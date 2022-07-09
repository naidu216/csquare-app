import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3';
let TwoColMasonaryComponent = class TwoColMasonaryComponent {
    constructor() {
        this.myOptions = {
            transitionDuration: '0.8s',
            originTop: true
        };
        setTimeout(() => {
            this.blogData = blogMasonaryDB.masonary;
        });
    }
    ngOnInit() {
    }
};
TwoColMasonaryComponent = tslib_1.__decorate([
    Component({
        selector: 'app-full-width-two-column',
        templateUrl: './full-width-two-column.component.html',
        styleUrls: ['./full-width-two-column.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], TwoColMasonaryComponent);
export { TwoColMasonaryComponent };
//# sourceMappingURL=full-width-two-column.component.js.map