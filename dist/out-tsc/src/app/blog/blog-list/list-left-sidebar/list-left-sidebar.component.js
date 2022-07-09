import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list';
let ListLeftSidebarComponent = class ListLeftSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.list;
    }
    ngOnInit() {
    }
};
ListLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-left-sidebar',
        templateUrl: './list-left-sidebar.component.html',
        styleUrls: ['./list-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ListLeftSidebarComponent);
export { ListLeftSidebarComponent };
//# sourceMappingURL=list-left-sidebar.component.js.map