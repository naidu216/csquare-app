import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogDetailDB } from '../../../shared/data/blog/blog-detail/blog-detail';
let DetailNoSidebarComponent = class DetailNoSidebarComponent {
    constructor() {
        this.blogData = blogDetailDB.Details;
    }
    ngOnInit() {
    }
};
DetailNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-detail-no-sidebar',
        templateUrl: './detail-no-sidebar.component.html',
        styleUrls: ['./detail-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], DetailNoSidebarComponent);
export { DetailNoSidebarComponent };
//# sourceMappingURL=detail-no-sidebar.component.js.map