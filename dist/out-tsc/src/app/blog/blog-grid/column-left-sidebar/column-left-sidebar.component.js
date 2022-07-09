import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column';
let ColumnLeftSidebarComponent = class ColumnLeftSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.column;
    }
    ngOnInit() {
    }
};
ColumnLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-column-left-sidebar',
        templateUrl: './column-left-sidebar.component.html',
        styleUrls: ['./column-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ColumnLeftSidebarComponent);
export { ColumnLeftSidebarComponent };
//# sourceMappingURL=column-left-sidebar.component.js.map