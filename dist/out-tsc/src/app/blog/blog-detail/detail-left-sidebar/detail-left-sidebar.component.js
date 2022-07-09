import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail';
let DetailLeftSidebarComponent = class DetailLeftSidebarComponent {
    constructor() {
        this.blogData = blogDetailDB.Details;
    }
    ngOnInit() {
    }
};
DetailLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-left-sidebar',
        templateUrl: './detail-left-sidebar.component.html',
        styleUrls: ['./detail-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DetailLeftSidebarComponent);
export { DetailLeftSidebarComponent };
//# sourceMappingURL=detail-left-sidebar.component.js.map