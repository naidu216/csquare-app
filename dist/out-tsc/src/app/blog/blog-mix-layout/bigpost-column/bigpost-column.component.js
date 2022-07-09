import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/column';
let BigpostColumnComponent = class BigpostColumnComponent {
    constructor() {
        this.blogData = blogClassicDB.column;
    }
    ngOnInit() {
    }
};
BigpostColumnComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-column',
        templateUrl: './bigpost-column.component.html',
        styleUrls: ['./bigpost-column.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostColumnComponent);
export { BigpostColumnComponent };
//# sourceMappingURL=bigpost-column.component.js.map