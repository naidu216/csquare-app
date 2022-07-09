import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list';
let ListRightSidebarComponent = class ListRightSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.list;
    }
    ngOnInit() {
    }
};
ListRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-right-sidebar',
        templateUrl: './list-right-sidebar.component.html',
        styleUrls: ['./list-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ListRightSidebarComponent);
export { ListRightSidebarComponent };
//# sourceMappingURL=list-right-sidebar.component.js.map