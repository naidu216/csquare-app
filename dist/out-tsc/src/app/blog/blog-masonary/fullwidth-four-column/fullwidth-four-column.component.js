import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogMasonaryDB } from '../../../shared/data/blog/blog-masonary/fullwidth-3';
let FullwidthFourColumnComponent = class FullwidthFourColumnComponent {
    constructor() {
        setTimeout(() => {
            this.blogData = blogMasonaryDB.masonary;
        });
    }
    ngOnInit() {
    }
};
FullwidthFourColumnComponent = tslib_1.__decorate([
    Component({
        selector: 'app-fullwidth-four-column',
        templateUrl: './fullwidth-four-column.component.html',
        styleUrls: ['./fullwidth-four-column.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], FullwidthFourColumnComponent);
export { FullwidthFourColumnComponent };
//# sourceMappingURL=fullwidth-four-column.component.js.map