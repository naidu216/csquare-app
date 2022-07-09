import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split';
let SplitLeftSidebarComponent = class SplitLeftSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.split;
    }
    ngOnInit() {
    }
};
SplitLeftSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-split-left-sidebar',
        templateUrl: './split-left-sidebar.component.html',
        styleUrls: ['./split-left-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SplitLeftSidebarComponent);
export { SplitLeftSidebarComponent };
//# sourceMappingURL=split-left-sidebar.component.js.map