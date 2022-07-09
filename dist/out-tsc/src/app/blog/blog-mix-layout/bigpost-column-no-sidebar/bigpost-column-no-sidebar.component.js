import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/column-no-sidebar';
let BigpostColumnNoSidebarComponent = class BigpostColumnNoSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.column;
    }
    ngOnInit() {
    }
};
BigpostColumnNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-column-no-sidebar',
        templateUrl: './bigpost-column-no-sidebar.component.html',
        styleUrls: ['./bigpost-column-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostColumnNoSidebarComponent);
export { BigpostColumnNoSidebarComponent };
//# sourceMappingURL=bigpost-column-no-sidebar.component.js.map