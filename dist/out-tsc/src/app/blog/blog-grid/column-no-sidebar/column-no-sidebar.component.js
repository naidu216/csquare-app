import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/column';
let ColumnNoSidebarComponent = class ColumnNoSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.column;
    }
    ngOnInit() {
    }
};
ColumnNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-column-no-sidebar',
        templateUrl: './column-no-sidebar.component.html',
        styleUrls: ['./column-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ColumnNoSidebarComponent);
export { ColumnNoSidebarComponent };
//# sourceMappingURL=column-no-sidebar.component.js.map