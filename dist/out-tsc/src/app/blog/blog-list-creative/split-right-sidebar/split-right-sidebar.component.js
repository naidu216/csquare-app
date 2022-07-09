import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { blogBasicDB } from '../../../shared/data/blog/blog-basic/split';
let SplitRightSidebarComponent = class SplitRightSidebarComponent {
    constructor() {
        this.blogData = blogBasicDB.split;
    }
    ngOnInit() {
    }
};
SplitRightSidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-split-right-sidebar',
        templateUrl: './split-right-sidebar.component.html',
        styleUrls: ['./split-right-sidebar.component.scss']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], SplitRightSidebarComponent);
export { SplitRightSidebarComponent };
//# sourceMappingURL=split-right-sidebar.component.js.map