import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogClassicDB } from '../../../shared/data/blog/blog-classic/list';
let BigpostListNoSidebarComponent = class BigpostListNoSidebarComponent {
    constructor() {
        this.blogData = blogClassicDB.list;
    }
    ngOnInit() {
    }
};
BigpostListNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-bigpost-list-no-sidebar',
        templateUrl: './bigpost-list-no-sidebar.component.html',
        styleUrls: ['./bigpost-list-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], BigpostListNoSidebarComponent);
export { BigpostListNoSidebarComponent };
//# sourceMappingURL=bigpost-list-no-sidebar.component.js.map