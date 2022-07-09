import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/list';
let BigpostListComponent = class BigpostListComponent {
    constructor() {
        this.blogData = blogClassicDB.list;
    }
    ngOnInit() {
    }
};
BigpostListComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-list',
        templateUrl: './bigpost-list.component.html',
        styleUrls: ['./bigpost-list.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostListComponent);
export { BigpostListComponent };
//# sourceMappingURL=bigpost-list.component.js.map