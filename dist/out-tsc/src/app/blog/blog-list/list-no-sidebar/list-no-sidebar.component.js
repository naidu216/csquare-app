import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/list';
let ListNoSidebarComponent = class ListNoSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.list;
    }
    ngOnInit() {
    }
};
ListNoSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-list-no-sidebar',
        templateUrl: './list-no-sidebar.component.html',
        styleUrls: ['./list-no-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ListNoSidebarComponent);
export { ListNoSidebarComponent };
//# sourceMappingURL=list-no-sidebar.component.js.map