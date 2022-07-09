import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column';
let ColumnRightSidebarComponent = class ColumnRightSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.column;
    }
    ngOnInit() {
    }
};
ColumnRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-column-right-sidebar',
        templateUrl: './column-right-sidebar.component.html',
        styleUrls: ['./column-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ColumnRightSidebarComponent);
export { ColumnRightSidebarComponent };
//# sourceMappingURL=column-right-sidebar.component.js.map